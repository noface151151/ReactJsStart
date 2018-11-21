import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
// import { connect } from 'react-redux';
import cx from 'classnames';

class UserInfo extends Component {

  state = {
    isShowingUserMenu: false
  };

  render() {
    let { user } = this.props;
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src="https://media.lamsao.com/ContentUpload//quynhnx/3-8/cach_huan_luyen_cho_con_dung_theo_mong_doi-500x350.jpg" alt="HinhAnh" className="photo" />
          <div className="userinfo">
            <div className="username">
              {/* {user.name} */}
              Administrator
            </div>
            <div className="title">Admin</div>
          </div>
          <span
            onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}
            className={cx("pe-7s-angle-down collapse-arrow", {
              active: isShowingUserMenu
            })}></span>
        </div>
        <Collapse in={isShowingUserMenu}>
          <ul className="nav user-nav">
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Edit Profile</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.Auth.user
// });

// export default connect(mapStateToProps)(UserInfo);
export default UserInfo;