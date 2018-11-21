import React, { Component } from "react";
import Products from "../../../Config/Product";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="header text-center">
          <h4 className="title">Danh sách sản phẩm</h4>
          <br />
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-bigboy">
            <thead>
              <tr>
                <th className="text-center" />
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th className="th-description">Mô tả</th>
                <th className="">Xử lý</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {Products.map(item => (
                <ProductItem key={item.id} product={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
