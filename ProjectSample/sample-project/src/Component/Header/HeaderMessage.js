import React from "react";

const HeaderMessage = props => {
  return (
    <li className="dropdown d-none d-md-block">
      <span className="topbar-btn" data-toggle="dropdown" aria-expanded="false">
        <i className="ti-email" />
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
        <div
          className="media-list media-list-divided media-list-hover media-list-xs scrollable ps-container ps-theme-default"
          style={{ height: 290 }}
        >
          <a className="media media-new" href="#">
            <span className="avatar status-success">
              <img src="assets/img/avatar.png" />
            </span>
            <div className="media-body">
              <p>
                <strong>Trần Chân</strong>{" "}
                <time className="float-right" dateTime="2018-07-14 20:00">
                  23 phút trước
                </time>
              </p>
              <p className="text-truncate">
                Cho em hỏi cách sử dụng bình đun sôi mã hàng PE00088.
              </p>
            </div>
          </a>
          <a className="media media-new" href="../page-app/mailbox-single.html">
            <span className="avatar status-warning">
              <img src="assets/img/avatar.png" />
            </span>
            <div className="media-body">
              <p>
                <strong>Lý Thu Thủy</strong>{" "}
                <time className="float-right" dateTime="2018-07-14 20:00">
                  48 phút trước
                </time>
              </p>
              <p className="text-truncate">
                Vui lòng cập nhật mã số thuế cá nhân của bạn
              </p>
            </div>
          </a>
          <a className="media" href="../page-app/mailbox-single.html">
            <span className="avatar status-warning bg-blue">LV</span>
            <div className="media-body">
              <p>
                <strong>Lê Vy</strong>{" "}
                <time className="float-right" dateTime="2018-07-14 20:00">
                  3 giờ trước
                </time>
              </p>
              <p className="text-truncate">Báo giá túi xách hàng hiệu</p>
            </div>
          </a>
          <a className="media" href="../page-app/mailbox-single.html">
            <span className="avatar status-success bg-purple">ST</span>
            <div className="media-body">
              <p>
                <strong>Sơn Tùng</strong>{" "}
                <time className="float-right" dateTime="2018-07-14 20:00">
                  21 hours ago
                </time>
              </p>
              <p className="text-truncate">Chào hàng microphone mới</p>
            </div>
          </a>
          <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}>
            <div
              className="ps-scrollbar-x"
              tabIndex={0}
              style={{ left: 0, width: 0 }}
            />
          </div>
          <div className="ps-scrollbar-y-rail" style={{ top: 0, right: 2 }}>
            <div
              className="ps-scrollbar-y"
              tabIndex={0}
              style={{ top: 0, height: 0 }}
            />
          </div>
        </div>
        <div className="dropdown-footer">
          <div className="left">
            <a href="#">Xem tất cả thư</a>
          </div>
          <div className="right">
            <a
              href="#"
              data-provide="tooltip"
              title
              data-original-title="Đánh dấu đã đọc"
            >
              <i className="fa fa-circle-o" />
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

export default HeaderMessage;
