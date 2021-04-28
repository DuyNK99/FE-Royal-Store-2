import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";
import { toast } from "react-toastify";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyCoupon,
  createCashOrderForUser,
} from "../functions/user";
import "../App.css"
const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const summaryOrder = document.getElementById("summaryOrder");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 620) {
      if (summaryOrder) {
        summaryOrder.style.position = "absolute";
        summaryOrder.style.bottom = "20px";
      }
    } else {
      if (summaryOrder) {
        summaryOrder.style.position = "fixed";
        summaryOrder.style.right = "0";
        summaryOrder.style.top = "auto";
        summaryOrder.style.bottom = "unset";
      }
    }
  };

  window.addEventListener("scroll", listenScrollEvent);
  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      toast.success("Cart is emapty. Contniue shopping.");
    });
  };

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <div>
      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </div>
  );

  return (
    <div className="container-fluid pt-2">
      <div>
        <h4>You have "{cart.length} Product" in your Cart</h4>

        {!cart.length ? (
          
          <div className="continue-shopping">
             <img src="/images/continute-shopping.png" className="section_img" style={{width:"350px", height:"350px"}}></img>
            <span style={{fontWeight:"bold", fontSize:"1.5rem", display:"block"}}><Link to="/shop">Continue Shopping.</Link></span>
          </div>
        ) : (
          <div style={{position:"relative"}} className="row">
            <div className="col-md-8">{showCartItems()}</div>
            <div id="summaryOrder" className="col-md-4" style={{backgroundColor:"rgba(226, 226, 226, 0.5)", marginTop:"10px", padding:"10px"}}>
              <h4 style={{fontWeight:"bold"}}>Order Summary</h4>

              {cart.map((c, i) => (
                <div key={i}>
                  <p>
                    {c.title} x {c.count} = ${c.price * c.count}
                  </p>
                </div>
              ))}

              Total: <span style={{color:"red", fontWeight:"bold", fontSize:"20px"}}>${getTotal()}</span>
              <div className="col-md-6">
            <button
              disabled={!cart.length}
              onClick={emptyCart}
              className="btn btn-primary"
            >
              Empty Cart
            </button>
          </div>
       
              {user ? (
                <div className="d-flex justify-content-center">
                  <button
                    onClick={saveOrderToDb}
                    className="btn btn-sm mt-2"
                    disabled={!cart.length}
                    style={{color:"white", backgroundColor:"green"}}
                  >
                    Proceed to Checkout
                  </button>
                  
                  <button
                    onClick={saveCashOrderToDb}
                    className="btn btn-sm mt-2"
                    disabled={!cart.length}
                    style={{color:"white", backgroundColor:"blue", marginLeft:"20px", padding:"10px"}}
                  >
                    Pay Cash on Delivery
                  </button>
                </div>
              ) 
              : (
                <button className="btn btn-sm btn-primary mt-2">
                  <Link
                    to={{
                      pathname: "/login",
                      state: { from: "cart" },
                    }}
                  >
                    Login to Checkout
                  </Link>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
