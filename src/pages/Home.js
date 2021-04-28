import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import Table from "../components/home/Table";
import Beds from "../components/home/Bed";
import Chair from "../components/home/Chair";
import "../App.css";

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="slide">
          <img src="/images/SlideHome.jpeg" className="section_img"></img>
          <div className="jumbotron h1 font-weight-bold text-center text-slide">
            <Jumbotron
              text={["Choose the right product for your home", "Your trust is our driving force", "Let us help you perfect your home"]}
            />
          </div>
        </div>
      </div>
      <h4 className="home-product-list text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor:"rgb(9,58, 84, 0.8)"}}>
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="home-product-list text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor:"rgb(9,58, 84, 0.8)"}}>
        Best Sellers
      </h4>
      <BestSellers />
      <h4 className="home-product-list text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor:"rgb(9,58, 84, 0.8)"}}>
        Table
      </h4>
      <Table />
      <h4 className="home-product-list text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor:"rgb(9,58, 84, 0.8)"}}>
        Beds
      </h4>
      <Beds />
      <h4 className="home-product-list text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor:"rgb(9,58, 84, 0.8)"}}>
        Chair
      </h4>
      <Chair />
      <br />
      </div>
    </>
  );
};

export default Home;
