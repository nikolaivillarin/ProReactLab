import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, startEditingProduct } from "./store";

const ProductTableRow = props => {
  const dispatch = useDispatch();
  let p = props.product;

  return (
    <tr>
      <td>{p.id}</td>
      <td>{p.name}</td>
      <td>{p.category}</td>
      <td className="text-right">${ Number(p.price).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-sm btn-warning m-1"
          onClick={() => dispatch(startEditingProduct(p))}>
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger m-1"
          onClick={() => dispatch(deleteProduct(p))}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;