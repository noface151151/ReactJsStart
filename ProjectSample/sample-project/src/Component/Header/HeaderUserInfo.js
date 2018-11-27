import React from "react";

const HeaderUserInfo = props => {
  return (
    <li className="dropdown">
      <span className="topbar-btn" data-toggle="dropdown">
        <img className="avatar" src="assets/img/avatar.png" alt="..." />
      </span>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="../page/profile.html">
          <i className="ti-user" /> Thông tin tài khoản
        </a>
        <a className="dropdown-item" href="../page-app/mailbox.html">
          <div className="flexbox">
            <i className="ti-email" />
            <span className="flex-grow">Hộp thư</span>
            <span className="badge badge-pill badge-info">5</span>
          </div>
        </a>
        <a className="dropdown-item" href="#">
          <i className="ti-settings" /> Thiết lập tài khoản
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="../page-extra/user-login-3.html">
          <i className="ti-power-off" /> Đăng xuất
        </a>
      </div>
    </li>
  );
};

export default HeaderUserInfo;
