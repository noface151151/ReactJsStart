import React, { Component } from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderUserInfo from "./HeaderUserInfo";
import HeaderNotify from "./HeaderNotify";
import HeaderMessage from "./HeaderMessage";

class Header extends Component {
  render() {
    return (
      <header className="topbar">
        <div className="topbar-left">
          <div className="topbar-divider d-none d-md-block" />
          <div>
            <i className="fa fa-mobile" /> Hot line:{" "}
            <strong>0909 999 999</strong>
          </div>
          <div className="topbar-divider d-none d-md-block" />
          <HeaderSearch />
        </div>

        <div className="topbar-right">
          <ul className="topbar-btns">
            <HeaderUserInfo />
            <HeaderNotify />
            <HeaderMessage />
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
