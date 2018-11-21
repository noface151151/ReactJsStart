import React from "react";
import CurrencyFormat from 'react-currency-format';

const ProductItem = props => {
  const ImageDefault = props.product.Images.find(el => {
    return el.IsDefault === true;
  });
  return (
    <tr >
      <td>
        <div className="img-container">
          <img style={{maxHeight:128,maxWidth:128}} src={ImageDefault.Link} alt={props.product.name} />
        </div>
      </td>
      <td className="td-name">{props.product.name}</td>
      <td className="td-name"> <CurrencyFormat value={props.product.Price} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'} /></td>
      <td>{props.product.Description}</td>
      <td className="td-actions">
        <button
          type="button"
          rel="tooltip"
          data-placement="left"
          title=""
          className="btn btn-success btn-simple btn-icon"
          data-original-title="Edit Post"
        >
          <i className="fa fa-edit" />
        </button>
        <button
          type="button"
          rel="tooltip"
          data-placement="left"
          title=""
          className="btn btn-danger btn-simple btn-icon "
          data-original-title="Remove Post"
        >
          <i className="fa fa-times" />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
