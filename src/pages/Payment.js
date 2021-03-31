import React, { useRef, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout";
import "../App.css";
const Payment = () => {
// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const paypal = useRef();

useEffect(() => {
  window.paypal
    .Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Cool looking table",
              amount: {
                currency_code: "CAD",
                value: 650.0,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err) => {
        console.log(err);
      },
    })
    .render(paypal.current);
}, []);


  return (
    <div className="container p-5 text-center">
      <h4>Complete your purchase</h4>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <StripeCheckout />
        </div>
      </Elements>
      <div ref={paypal}></div>
    </div>
  );
};

export default Payment;
