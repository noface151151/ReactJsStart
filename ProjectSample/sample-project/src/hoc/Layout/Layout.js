import React, { Component } from "react";
import Sidebar from "../../Component/SideBar";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        {/* Preloader */}
        {/* <div className="preloader">
                    <div className="spinner-dots">
                      <span className="dot1" />
                      <span className="dot2" />
                      <span className="dot3" />
                    </div>
                  </div> */}
        <Sidebar />
        <Header />
        <main className="main-container">
          <div className="main-content">{this.props.children}</div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Layout;
