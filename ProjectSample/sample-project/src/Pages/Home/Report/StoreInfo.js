import React, { Component } from "react";

class StoreInfo extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <h4 className="card-title">
            <i className="fa fa-shopping-cart" /> Thông tin kho
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
                  <th>Tồn kho lâu</th>
                  <td align="right">
                    <strong>50</strong>
                  </td>
                </tr>
                <tr>
                  <th>Hết hàng</th>
                  <td align="right">
                    <strong>54</strong>
                  </td>
                </tr>
                <tr>
                  <th>Sắp hết hàng</th>
                  <td align="right">
                    <strong>5</strong>
                  </td>
                </tr>
                <tr>
                  <th>Vượt định mức</th>
                  <td align="right">
                    <strong>8</strong>
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

export default StoreInfo;
