import React from "react";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";

const ProductListItems = ({ product }) => {
  const {
    price,
    category,
    subs,
    shipping,
    material,
    quantity,
    sold,
  } = product;

  return (
    <ul className="list-group">
       {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}
      <li className="list-group-item">
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          $ {price}
        </span>
      </li>

     

      <li className="list-group-item">
        Shipping{" "}
        <span className="label label-default label-pill pull-xs-right">
          {shipping}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
