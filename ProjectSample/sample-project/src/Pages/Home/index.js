import React, { Component } from "react";
import General from "./General/General";
import Statistical from "./Report/Statistical";
import StoreInfo from "./Report/StoreInfo";
import GoodsInfo from "./Report/GoodsInfo";
import Revenue from "./Revenue/Revenue";
import RecentActivity from "./RecentActivity/RecentActivity";

class Home extends Component {
  render() {
    return (
      <div>
        <General />
        <div className="row">
          <div className="col-4 col-xs-12">
            <Statistical />
          </div>
          <div className="col-4 col-xs-12">
            <StoreInfo />
          </div>
          <div className="col-4 col-xs-12">
            <GoodsInfo />
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-xs-12">
            <Revenue />
          </div>
          <div className="col-4 col-xs-12">
            <RecentActivity />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
