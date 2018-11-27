import React, { Component } from "react";

class Statistical extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <h4 className="card-title">
            <i className="fa fa-list" /> Thống kê
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
        <div className="card-content">
          <div className="card-body">
            <table className="table table-separated">
              <tbody>
                <tr>
                  <th>Tiền bán hàng</th>
                  <td align="right">
                    <strong>1.500.000.000</strong>
                  </td>
                </tr>
                <tr>
                  <th>Lãi</th>
                  <td align="right">
                    <strong>50.000.000</strong>
                  </td>
                </tr>
                <tr>
                  <th>Số đơn hàng</th>
                  <td align="right">
                    <strong>50</strong>
                  </td>
                </tr>
                <tr>
                  <th>Tiền bán hàng</th>
                  <td align="right">
                    <strong>1.500.000.000</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistical;
