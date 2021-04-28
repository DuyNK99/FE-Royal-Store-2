import React from "react";
import {Link} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
     <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID of Orders</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>

            <tbody>
             
                <tr>
                  <td>{order._id}</td>
                  <td> {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</td>
                  <td>Payment {order.paymentIntent.status.toUpperCase()}</td>
                  <td>
                  {(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              
            </tbody>
          </table>
    {/* <p>
      <span>Order Id: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Amount:{" / "}
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      {" / "}
      <span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Method: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>
        Orderd on:{" / "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p> */}
  </div>
);

export default ShowPaymentInfo;
