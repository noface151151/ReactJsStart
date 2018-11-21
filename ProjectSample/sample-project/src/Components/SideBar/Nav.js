import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import Menu from "../../Config/MenuConfig";
// import { PathContext, path } from "../../Config/PathContext";
var shortid = require("shortid");

class Nav extends Component {
  state = {
    pathActive: "/",
    parentMenu: null
  };

  render() {
    // const { href } = this.props;
    //const hrefFix = href.split("/")[3] + "/" + href.split("/")[4]==="/undefined"?"":href.split("/")[3] + "/" + href.split("/");
    console.log(this.props.location.pathname);
    const MenuList = Menu.map((value, index) => {
      if (value.IsHasSubMenu === false) {
        return (
          <li
            onClick={() => {
              this.setState({
                parentMenu: value.name
              });
            }}
            key={shortid.generate()}
            className={
              value.path === this.props.location.pathname ? "active" : null
            }
          >
            <Link to={value.path}>
              <i className={value.classNameLink} />
              <p>{value.name}</p>
            </Link>
          </li>
        );
      }
      const SubMenu = value.SubMenu.map((valueSubMenu, index) => {
        return (
          <li
            key={shortid.generate()}
            className={
              value.path + valueSubMenu.path === this.props.location.pathname
                ? "active"
                : null
            }
          >
            <Link to={ value.path + valueSubMenu.path}>{valueSubMenu.name}</Link>
          </li>
        );
      });
      return (
        <li key={shortid.generate()}>
          <a
            onClick={() => {
              this.setState({ parentMenu: value.path });
            }}
            data-toggle="collapse"
          >
            <i className={value.classNameLink} />
            <p>
              {value.name}
              <b className={value.classNameSubMenu} />
            </p>
          </a>
          <Collapse in={value.path === "/Product"}>
            <div>
              <ul className="nav">{SubMenu}</ul>
            </div>
          </Collapse>
        </li>
      );
    });

    return <ul className="nav">{MenuList}</ul>;
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
// Nav.contextType = PathContext;
export default withRouter(Nav);
