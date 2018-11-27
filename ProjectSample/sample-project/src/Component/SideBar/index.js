import React, { Component } from "react";
import Menu from "../../Config/Menu";
import SubmenuItems from "./SideBarSubItem";
import { Link } from "react-router-dom";
import cx from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";

class SideBar extends Component {
  state = {
    menuActive: null
  };
  toggleSubMenu = menu => {
    if (menu === this.state.menuActive) {
      this.setState({ menuActive: null });
    } else {
      this.setState({ menuActive: menu });
    }
  };
  
  render() {

    const MenuList = Menu.map((value, index) => {
      if (value.IsMenuCategory) {
        return (
          <li key={value.id} className="menu-category">
            {value.display}
          </li>
        );
      }
      if (value.isHasSubmenu === false) {
        return (
          <li key={value.id} className="menu-item">
            <Link to={value.parentPath} className="menu-link">
              <span className={value.iconClass} />
              <span className="title">{value.display}</span>
            </Link>
          </li>
        );
      }
      if (value.isHasSubmenu === true && value.subMenu !== null) {
        return (
          <li
            key={value.id}
            className={
              this.state.menuActive !== value.id
                ? "menu-item"
                : cx("menu-item open")
            }
            onClick={() => this.toggleSubMenu(value.id)}
          >
            <a style={{cursor:'pointer'}} className="menu-link" >
              <span className={value.iconClass} />
              <span className="title">{value.display}</span>
              <span className="arrow" />
            </a>
          
              <ul
                className="menu-submenu"
                style={{
                  display: this.state.menuActive !== value.id ? "none" : "block"
                }}
              >
                <SubmenuItems
                  isShow={this.state.menuActive === value.id}
                  subMenu={value.subMenu}
                  parentPath={value.parentPath}
                />
              </ul>
            
          </li>
        );
      }
      return null;
    });
    return (
      <aside className="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-default sidebar-color-info">
        <header className="sidebar-header">
          <a className="logo-icon" href="index.html">
            ERP
          </a>
          <span className="logo">
            <a href="../index.html">PRO SHOPPING</a>
          </span>
        </header>
        <PerfectScrollbar component="nav">
          <nav className="sidebar-navigation">
            <ul className="menu">{MenuList}</ul>
            {/* <div className="ps-scrollbar-x-rail">
            <div className="ps-scrollbar-x" tabIndex="0" />
          </div>
          <div className="ps-scrollbar-y-rail">
            <div className="ps-scrollbar-y" tabIndex="0" />
          </div> */}
          </nav>
        </PerfectScrollbar>
      </aside>
    );
  }
}

export default SideBar;
