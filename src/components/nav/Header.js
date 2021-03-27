import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link} from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import "../../App.css";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <>
      <nav className="nav_wrap">
        <div className="container-fluid">
          <div className="row row_wrap">
            <div className="col-lg-2">
              <Link to="/" className="navbar-logo">
                <img className="navbar-logo-img" src="/images/royalLogo.png"></img>
              </Link>
            </div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <ul className="nav-title">
                      <h3>Your Are Best</h3>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    theme="dark"
                  >
                    {!user && (
                      <Item
                        key="register"
                        icon={<UserAddOutlined />}
                        className="float-right"
                      >
                        <Link to="/register">Register</Link>
                      </Item>
                    )}

                    {!user && (
                      <Item
                        key="login"
                        icon={<UserOutlined />}
                        className="float-right"
                      >
                        <Link to="/login">Login</Link>
                      </Item>
                    )}

                    {user && (
                      <SubMenu
                        icon={<SettingOutlined />}
                        title={user.email && user.email.split("@")[0]}
                        className="float-right"
                      >
                        {user && user.role === "subscriber" && (
                          <Item>
                            <Link to="/user/history">Dashboard</Link>
                          </Item>
                        )}

                        {user && user.role === "admin" && (
                          <Item>
                            <Link to="/admin/dashboard">Dashboard</Link>
                          </Item>
                        )}

                        <Item icon={<LogoutOutlined />} onClick={logout}>
                          Logout
                        </Item>
                      </SubMenu>
                    )}
                   {cart && cart.length > 0 &&( <Item
                      key="cart"
                      icon={<ShoppingCartOutlined style={{color: "white"}}/>}
                      className="float-right"
                    >
                      <Link to="/cart">
                        <Badge count={cart.length} offset={[9, 0]} >
                          <span style={{color: "white"}}>Cart</span>
                        </Badge>
                      </Link>
                    </Item>)}
                          {cart && cart.length == 0 &&( <Item
                      key="cart"
                      icon={<ShoppingCartOutlined style={{color: "rgba(255, 255, 255, 0.65)"}}/>}
                      className="float-right"
                    >
                      <Link to="/cart">
                        <Badge count={cart.length} offset={[9, 0]} >
                          <span style={{color: "rgba(255, 255, 255, 0.65)"}}>Cart</span>
                        </Badge>
                      </Link>
                    </Item>)}
                  </Menu>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    theme="dark"
                  >
                    <Item key="home" icon={<AppstoreOutlined />}>
                      <Link to="/">Home</Link>
                    </Item>

                    <Item key="shop" icon={<ShoppingOutlined />}>
                      <Link to="/shop">Shop</Link>
                    </Item>
                  </Menu>
                </div>
                <div className="col-lg-4">
                  <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    theme="dark"
                  >
                    <span className="float-right p-1">
                      <Search />
                    </span>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
