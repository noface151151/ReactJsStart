import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import cx from "classnames";
import { withRouter } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Product from "../Product/index";

class Main extends Component {
  state = {
    mobileNavVisibility: false
  };
  hideMobileMenu = () => {
    const mobileNav = !this.state.mobileNavVisibility;
    this.setState({ mobileNavVisibility: mobileNav });
  };

  render() {
    return (
      <div
        className={cx({
          "nav-open": this.state.mobileNavVisibility === true
        })}
      >
        <div className="wrapper">
          <div className="close-layer" onClick={this.hideMobileMenu} />
          <SideBar />

          <div className="main-panel">
            <Header />
      
              <Route path="/Product" component={Product} />
          
            {/* <Route exact path="/" component={Dashboard} />
            <Route path="/components" component={Components} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/forms" component={Forms} />
            <Route path="/tables" component={Tables} />
            <Route path="/maps" component={MapsPage} />
            <Route path="/charts" component={Charts} />
            <Route path="/calendar" component={Calendar} /> */}

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
