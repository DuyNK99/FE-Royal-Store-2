import React from "react";
import { Link } from "react-router-dom";
import { Menu} from "antd";
import "../../App.css"
const { SubMenu, Item } = Menu;

const UserNav = () => (
  <nav>
      <Menu
        mode="horizontal"
        className="d-flex justify-content-center admin-nav-menu"
        style={{marginTop:"5px", backgroundColor:"rgb(9,58, 84,0.9)",position:"fixed", zIndex:"1",left:"30%"}}
      >
        <Item>
          {" "}
          <Link to="/user/history" className="" style={{fontSize:"18px", color:"white"}}>
            Order History
          </Link>
        </Item>
        <Item >
          <Link to="/user/wishlist" className="" style={{fontSize:"18px",color:"white"}}>
            Wishlist
          </Link>
        </Item>
        <Item >
          <Link to="/user/password" className="" style={{fontSize:"18px",color:"white"}}>
            Change Password
          </Link>
        </Item>
      </Menu>
    </nav>
);

export default UserNav;