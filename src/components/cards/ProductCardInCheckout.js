import React from "react";
import ModalImage from "react-modal-image";
import laptop from "../../images/bugatti-divo-red-performance-ac.jpg";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ProductCardInCheckout = ({ p }) => {
  const materials = ["Wood", "Metal", "Glasses", "Leather ", "Plastic"];
  let dispatch = useDispatch();

  // const handleMaterialChange = (e) => {
  //   console.log("color changed", e.target.value);

  //   let cart = [];
  //   if (typeof window !== "undefined") {
  //     if (localStorage.getItem("cart")) {
  //       cart = JSON.parse(localStorage.getItem("cart"));
  //     }

  //     cart.map((product, i) => {
  //       if (product._id === p._id) {
  //         cart[i].material = e.target.value;
  //       }
  //     });

  //     //  console.log('cart udpate color', cart)
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     dispatch({
  //       type: "ADD_TO_CART",
  //       payload: cart,
  //     });
  //   }
  // };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <div className="row" style={{}}>
      <div className="col" style={{ height: "220px",backgroundColor:"rgba(226, 226, 226, 0.5)", margin:"10px 10px  0 10px", paddingTop:"10px" }}>
        <div className="row">
          <div style={{ width: "100px", height: "auto" }} className="col-md-3">
            {p.images.length ? (
              <div style={{ width: "100px", height: "100px" }}>
                <img
                  src={p.images[0].url}
                  large={p.images[0].url}
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    width: "200px",
                    padding: "0",
                    margin: "0 auto",
                  }}
                />
              </div>
            ) : (
              <img
              src={laptop}
              style={{
                objectFit: "cover",
                height: "200px",
                width: "200px",
                padding: "0",
                margin: "0 auto",
              }}
            />
            )}
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6"><span style={{fontWeight:"bold", fontSize:"20px"}}>{p.title}</span></div>
            </div>
            <div className="row">
              <div className="col-md-6" style={{marginTop:"20px"}}>
                <span style={{fontWeight:"bold", fontSize:"14px"}} >Material:</span> {p.material}
                <br />
                {p.shipping === "Yes" ? (
                  <span style={{fontWeight:"bold", fontSize:"14px", color:"#00e600"}}>Available Shipping</span>
                ) : (
                  <span style={{fontWeight:"bold", fontSize:"14px", color:"#e62e00"}}>Unavailable Shipping</span>
                )}
              </div>
              <div className="col-md-3"  style={{marginTop:"20px"}}><span style={{fontWeight:"bold", fontSize:"14px"}}>Price: </span>${p.price}</div>
              <div className="col-md-3" style={{ display: "flex",marginTop:"20px" }}>
                <span style={{fontWeight:"bold", fontSize:"14px"}}>Quantity:</span>
                <input
                  type="number"
                  className="form-control"
                  value={p.count}
                  onChange={handleQuantityChange}
                  style={{
                    width: "50px",
                    height: "20px",
                    marginLeft: "5px",
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-md-3 "style={{marginTop:"20px"}}>
                <button onClick={handleRemove} className="btn btn-sm mt-2" style={{backgroundColor: "#ff471a", color:"white"}}>
                  Remove Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardInCheckout;
