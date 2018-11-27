import React, { Component } from "react";

class GoodsInfo extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <h4 className="card-title">
            <i className="fa fa-shopping-bag" /> Thông tin hàng hóa
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
                  <th>Hàng hóa / Chủng loại</th>
                  <td align="right">
                    <strong>110 / 112</strong>
                  </td>
                </tr>
                <tr>
                  <th>Chưa làm giá bán</th>
                  <td align="right">
                    <strong>0</strong>
                  </td>
                </tr>
                <tr>
                  <th>Chưa nhập giá mua</th>
                  <td align="right">
                    <strong>0</strong>
                  </td>
                </tr>
                <tr>
                  <th>Hàng chưa phân loại</th>
                  <td align="right">
                    <strong>3</strong>
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

export default GoodsInfo;
