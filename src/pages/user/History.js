import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { getUserOrders } from "../../functions/user";
import { useSelector} from "react-redux";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../../components/cards/ShowPaymentInfo";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { Menu} from "antd";
const {SubMenu} = Menu;

const History = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadUserOrders();
  }, []);

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  // const showOrderInTable = (order) => (
  //   // <table className="table table-bordered">
  //   //   <thead className="thead-light">
  //   //     <tr>
  //   //       <th scope="col">Title</th>
  //   //       <th scope="col">Price</th>
  //   //       <th scope="col">Material</th>
  //   //       <th scope="col">Count</th>
  //   //       <th scope="col">Shipping</th>
  //   //     </tr>
  //   //   </thead>

  //   //   <tbody>
  //   //     {order.products.map((p, i) => (
  //   //       <tr key={i}>
  //   //         <td>
  //   //           <b>{p.product.title}</b>
  //   //         </td>
  //   //         <td>{p.product.price}</td>
  //   //         <td>{p.product.material}</td>
  //   //         <td>{p.count}</td>
  //   //         <td>
  //   //           {p.product.shipping === "Yes" ? (
  //   //             <CheckCircleOutlined style={{ color: "green" }} />
  //   //           ) : (
  //   //             <CloseCircleOutlined style={{ color: "red" }} />
  //   //           )}
  //   //         </td>
  //   //       </tr>
  //   //     ))}
  //   //   </tbody>
  //   // </table>
  //   <div>ADDad</div>
  // );

  const showDownloadLink = (order) => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
      className="btn btn-sm btn-block btn-outline-primary"
    >
      Download PDF
    </PDFDownloadLink>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <div key={i} className="m-5 p-3 card">
        <ShowPaymentInfo order={order} />
        <Menu mode="inline" style={{border:"1px solid black", marginBottom:"10px"}}>
          <SubMenu title={
                <span className="h6-shop">
                   Order Details
                </span>
              }>
            <div><table className="table table-bordered">
       <thead className="thead-light">
        <tr>
           <th scope="col">Title</th>
           <th scope="col">Price</th>
           <th scope="col">Material</th>
         <th scope="col">Count</th>
         <th scope="col">Shipping</th>
     </tr>
    </thead>

    <tbody>
     {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>{p.product.price}</td>
            <td>{p.product.material}</td>
            <td>{p.count}</td>
            <td>
              {p.product.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table></div>
          </SubMenu>
        </Menu>
        <div className="row">
          <div className="col">{showDownloadLink(order)}</div>
        </div>
      </div>
    ));

  return (
    <div className="container-fluid">
       <UserNav />
       <div className="row">
        <div className="col-md-2"></div>
         <div className="col-md-8" style={{marginTop:"80px"}}>
        
        <div className="col text-center">
          <h4>
            {orders.length > 0 ? "User purchase orders" : "No purchase orders"}
          </h4>
          {showEachOrders()}
          
        </div>
        
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default History;
