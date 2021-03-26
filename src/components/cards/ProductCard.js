import React, { useState } from "react";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/bugatti-divo-red-performance-ac.jpg";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import "../../App.css";



const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}
      {/* <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover", width: "330px"}}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
            </a>
          </Tooltip>,
        ]}
        style={{ width: "330px"}}>
        <Meta
          title={`${title} - $${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card> */}
      <div class="product-grid">
        <div class="product-image">
          <Link to={`/product/${slug}`} class="image">
            <img
              src={images && images.length ? images[0].url : laptop}
              style={{objectFit: "cover", height: "300px", width: "300px"}}
              className="p-1"
            />
          </Link>
          <ul class="product-links">
            <li>
              {" "}
              <Link to={`/product/${slug}`}>
                <EyeOutlined/> <br /> View Product
              </Link>
            </li>
            <li>
              {" "}
              
                <a onClick={handleAddToCart} disabled={product.quantity < 1}>
                  <ShoppingCartOutlined/> <br />
                  {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
                </a>
             
            </li>
          </ul>
        </div>
        <div class="product-content">
          <h3 class="product-title">
            <a href="#">{`${title}`}</a>
          </h3>
          <div class="price">{`$${price}`}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
