import React from "react";
import { useDispatch } from "react-redux";
import { deleteSupplier, startEditingSupplier } from "./store";

const SupplierTableRow = props => {
  const dispatch = useDispatch();
  let s = props.supplier;

  return (
    <tr>
      <td>{s.id}</td>
      <td>{s.name}</td>
      <td>{s.city}</td>
      <td>{s.products.join(",")}</td>
      <td>
        <button
          className="btn btn-sm btn-warning m-1"
          onClick={() => dispatch(startEditingSupplier(s))}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger m-1"
          onClick={() => dispatch(deleteSupplier(s))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SupplierTableRow;