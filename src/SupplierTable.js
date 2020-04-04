import React from "react";
import { useSelector } from "react-redux";
import SupplierTableRow from "./SupplierTableRow";
import { SUPPLIERS } from "./store/dataTypes";

const SupplierTable = props => {
  const suppliers = useSelector(state => state.modelData[SUPPLIERS]);

  return (
    <table className="table table-sm table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Products</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          suppliers.map(s => 
            <SupplierTableRow 
              supplier={s}
              key={s.id}
            />
          )
        }
      </tbody>
    </table>
  );
};

export default SupplierTable;