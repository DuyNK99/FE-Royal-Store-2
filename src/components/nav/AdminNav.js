import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu} from "antd";
import "../../App.css"
const { SubMenu, Item } = Menu;
const AdminNav = () => {

  return (
    <nav>
      <Menu
        mode="horizontal"
        className="d-flex justify-content-center admin-nav-menu"
        style={{marginTop:"5px", backgroundColor:"rgb(9,58, 84,0.9)",position:"fixed", zIndex:"1",left:"30%"}}
      >
        <Item>
          {" "}
          <Link to="/admin/dashboard" className="" style={{fontSize:"18px", color:"white"}}>
            Order Dashboard
          </Link>
        </Item>
        <SubMenu
          title="Product"
          style={{fontSize:"18px",color:"white"}}
        >
          <Item >
            <Link to="/admin/product" className="" style={{fontSize:"18px"}}>
              Create Product
            </Link>
          </Item>
          <Item>
            <Link to="/admin/products" className="" style={{fontSize:"18px"}}>
              List Products
            </Link>
          </Item>
        </SubMenu>
        <SubMenu
          
          title="Category"
          style={{fontSize:"18px",color:"white"}}
        >
          <Item>
            <Link to="/admin/category" className="" style={{fontSize:"18px"}}>
              Create Category
            </Link>
          </Item>
          <Item>
            <Link to="/admin/sub" className="" style={{fontSize:"18px"}}>
              Create Sub Category
            </Link>
          </Item>
        </SubMenu>
        <Item >
          <Link to="/admin/coupon" className="" style={{fontSize:"18px",color:"white"}}>
            CreateCoupon
          </Link>
        </Item>
      </Menu>
    </nav>
  );
};

export default AdminNav;
