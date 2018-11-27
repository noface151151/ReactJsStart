import React from "react";

const HeaderNotify = props => {
  return (
    <li className="dropdown d-none d-md-block">
      <span
        className="topbar-btn has-new"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="ti-bell" />
      </span>
      <div
        className="dropdown-menu dropdown-menu-right"
        x-placement="bottom-end"
        style={{
          position: "absolute",
          top: 65,
          left: "-312px",
          willChange: "top, left"
        }}
      >
        <div className="media-list media-list-hover media-list-divided media-list-xs">
          <a className="media media-new" href="#">
            <span className="avatar bg-success">
              <i className="ti-user" />
            </span>
            <div className="media-body">
              <p>Khách hàng mới đăng ký</p>
              <time dateTime="2018-07-14 20:00">Vừa xong</time>
            </div>
          </a>
          <a className="media" href="#">
            <span className="avatar bg-info">
              <i className="ti-shopping-cart" />
            </span>
            <div className="media-body">
              <p>Đơn hàng mới</p>
              <time dateTime="2018-07-14 20:00">2 phút trước</time>
            </div>
          </a>
          <a className="media" href="#">
            <span className="avatar bg-warning">
              <i className="ti-face-sad" />
            </span>
            <div className="media-body">
              <p>
                Hàng đổi trả từ <b>Ashlyn Culotta</b>
              </p>
              <time dateTime="2018-07-14 20:00">24 phút trước</time>
            </div>
          </a>
          <a className="media" href="#">
            <span className="avatar bg-primary">
              <i className="ti-money" />
            </span>
            <div className="media-body">
              <p>Đơn hàng đã xử lý xong</p>
              <time dateTime="2018-07-14 20:00">53 phút</time>
            </div>
          </a>
        </div>
        <div className="dropdown-footer">
          <div className="left">
            <a href="#">Xem tất cả thông báo</a>
          </div>
          <div className="right">
            <a
              href="#"
              data-provide="tooltip"
              title
              data-original-title="Đánh dấu tất cả là đã đọc"
            >
              <i className="fa fa-circle-o" />
            </a>
            <a
              href="#"
              data-provide="tooltip"
              title
              data-original-title="Cập nhật tin mới"
            >
              <i className="fa fa-repeat" />
            </a>
            <a
              href="#"
              data-provide="tooltip"
              title
              data-original-title="Thiết lập"
            >
              <i className="fa fa-gear" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeaderNotify;
