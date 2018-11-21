import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Collapse } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Nav from './Nav';

class SideBar extends Component {

  state = {};

  render() {
    let {
        href,
      backgroundColor,
      enableBackgroundImage,
      backgroundImage
    } = this.props;

    return (
      <div className="sidebar" data-color={backgroundColor} data-image={backgroundImage}>

        <div className="brand">
          <a href="https://reactjs.org/" className="brand-name">
            <img src={'https://thedevs.network/static/img/posts/best-ui-libraries-and-frameworks-for-reactjs.jpg'} alt="logo" className="logo" />
          </a>

        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
          }}>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
//   backgroundColor: state.ThemeOptions.backgroundColor,
//   backgroundImage: state.ThemeOptions.backgroundImage
// });

// export default withRouter(
//   connect(mapStateToProps)(SideBar)
// );

export default withRouter(SideBar);