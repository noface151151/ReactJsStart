import React, { Component } from "react";

class General extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <h4 className="card-title">Hoạt động hôm nay</h4>
          <ul className="card-controls">
            <li>
              <a className="card-btn-close" href="#" />
            </li>
            <li>
              <a className="card-btn-slide" href="#" />
            </li>
            <li>
              <a className="card-btn-fullscreen" href="#" />
            </li>
          </ul>
        </header>
        <div className="card-content">
          <div className="card-body">
            <div className="row no-gutters py-2">
              <div className="col-sm-4 col-lg-4">
                <div className="card-body br-1 border-light">
                  <div className="flexbox mb-1">
                    <span>
                      <i className="ti-money fs-30" />
                      <br />
                      Doanh thu
                    </span>
                    <span className="text-primary fs-40">55.000.000</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "35%", height: 4 }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="card-body">
                  <div className="flexbox mb-1">
                    <span>
                      <i className="ti-shopping-cart fs-30" />
                      <br />
                      Số đơn hàng
                    </span>
                    <span className="text-warning fs-40">12</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "40%", height: 4 }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="card-body bl-1 border-light">
                  <div className="flexbox mb-1">
                    <span>
                      <i className="ti-loop fs-30" />
                      <br />
                      Hàng khách trả
                    </span>
                    <span className="text-danger fs-40">02</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "5%", height: 4 }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default General
