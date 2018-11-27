import React, { Component } from "react";

class RecentActivity extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <h4 className="card-title">
            <i className="fa fa-bar-chart" /> Hoạt động gần đây
          </h4>
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
        <div className="media-list media-list-hover media-list-divided">
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-primary">
              <i className="fa fa-user" />
            </span>
            <span className="title">Khách hàng mới đăng ký</span>
            <time dateTime="2018-07-14 20:00">24 phút trước</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-success">
              <i className="fa fa-usd" />
            </span>
            <span className="title">Đơn hàng vừa thanh toán</span>
            <time dateTime="2018-07-14 20:00">2 giờ trước</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-danger">
              <i className="fa fa-area-chart" />
            </span>
            <span className="title">Cập nhật doanh thu</span>
            <time dateTime="2018-07-14 20:00">7 tiếng trước</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-yellow">
              <i className="fa fa-star" />
            </span>
            <span className="title">Đánh giá gần đây</span>
            <time dateTime="2018-07-14 20:00">Hôm qua</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-warning">
              <i className="fa fa-shopping-bag" />
            </span>
            <span className="title">25 mặt hàng sắp hết</span>
            <time dateTime="2018-07-14 20:00">Tuần trước</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-primary">
              <i className="fa fa-user" />
            </span>
            <span className="title">Khách hàng mới đăng ký</span>
            <time dateTime="2018-07-14 20:00">24 phút trước</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-success">
              <i className="fa fa-usd" />
            </span>
            <span className="title">Đơn hàng vừa thanh toán</span>
            <time dateTime="2018-07-14 20:00">2 giờ trước</time>
          </a>
          <a className="media media-single" href="#">
            <span className="avatar avatar-sm bg-danger">
              <i className="fa fa-area-chart" />
            </span>
            <span className="title">Cập nhật doanh thu</span>
            <time dateTime="2018-07-14 20:00">7 tiếng trước</time>
          </a>
        </div>
      </div>
    );
  }
}

export default RecentActivity;
