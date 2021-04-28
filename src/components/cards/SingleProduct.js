import React, { useState } from "react";
import "../../App.css";
import { Card, Tabs, Tooltip } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/bugatti-divo-red-performance-ac.jpg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import Slider from "react-slick";

const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  // router
  let history = useHistory();

  const { title, images, description, _id, category, subs, quantity, material } = product;

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

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          {images && images.length ? (
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 center">
                <Slider {...settings}>
                  {images &&
                    images.map((i) => <img src={i.url} key={i.public_id} />)}
                </Slider>
              </div>
              <div className="col-lg-3"></div>
            </div>
          ) : (
            <Card
              cover={<img src={Laptop} className="mb-3 card-image" />}
            ></Card>
          )}
        </div>

        <div className="col-md-6">
          <h1 className=" p-3">{title}</h1>
          <div className="d-flex">
            Category: 
            {category && (
              <div className="ml-4">
                <Link to={`/category/${category.slug}`} className="float-left">
                  {category.name}
                </Link>
              </div>
            )}
            {subs && (
              <div className="ml-1">
                {subs.map((s) => (
                  <Link key={s._id} to={`/sub/${s.slug}`}>
                    / {" "}{s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Card
            actions={[
              <a onClick={handleAddToCart} disabled={product.quantity < 1}>
                <ShoppingCartOutlined className="text-danger" />
                <br />
                {product.quantity < 1 ? "Out of Stock" : "Add To Cart"}
              </a>,
              <a onClick={handleAddToWishlist}>
                <HeartOutlined className="text-info" /> <br /> Add to Wishlist
              </a>,
              <RatingModal>
                <StarRating
                  name={_id}
                  numberOfStars={5}
                  rating={star}
                  changeRating={onStarClick}
                  isSelectable={true}
                  starRatedColor="red"
                />
              </RatingModal>,
            ]}
          >
            <ProductListItems product={product} />
          </Card>
        </div>
       
      </div> 
      <div className="product-info-detail">
        <h4 style={{marginLeft:"150px", marginTop:"20px"}}> Description</h4>
              <div className="product-content" style={{marginLeft:"180px"}}>
              {description && description}
</div>
        </div>
    </div>
  );
};

export default SingleProduct;
