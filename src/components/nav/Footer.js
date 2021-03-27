import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="footer-wrap">
    <footer className="footer">
        <div className="container-fluid">
            <div className="footer_container_wrap">
        <div className="row">
            <div className="col-lg-4">
                <h3 className="footer_title">Contact Information</h3>
                <div className="footer_wrap">
                    <ul className="footer_list">
                        <li className="footer_content">
                        <h5>Fanpages: Https://facebook.com</h5>
                        </li>
                        <li className="footer_content">
                        <h5>Email: duy123@gmail.com</h5>
                        </li>
                        <li className="footer_content">
                         <h5>Phone Number: 0123456789</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <h3 className="footer_title">Support</h3>
                <div className="footer_wrap">
                    <ul className="footer_list">
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5>Warranty Policy</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5>Delivery Policy</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5>Payment Guide</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5> FAQ</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5>Showroom</h5>
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <h3 className="footer_title">Product</h3>
                <div className="footer_wrap">
                <ul className="footer_list">
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5> Beds</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5> Tables and Desk</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5> Armoires and Wardrobes</h5>
                          </Link>
                        </li>
                        <li className="footer_content_link">
                        <Link to="/">
                        <h5> Sofas and Sectionals</h5>
                          </Link>
                        </li>
                    </ul>
                    </div>
            </div>
        </div>
        <div className="row footer2_wrap ">
            <div className="col-lg-6">
            <Link to="/" className="footer_logo">
                  <img className="footer_logo_img" src="/images/royalLogo.png"></img>
                </Link>
                </div>
            <div className="col-lg-6 footer_copyright">
            <h6>© Duy Khanh Nguyen<span> ALL RIGHTS RESERVED</span></h6>
            </div>
        </div>
        </div>
        </div>
    </footer></div>
        </>
  );
};

export default Footer;
