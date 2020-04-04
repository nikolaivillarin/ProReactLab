import React, { useState } from "react";
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingSupplier } from "./store";

const SupplierDisplay = props => {
  const stateData = useSelector(state => state.stateData);
  const dispatch = useDispatch();

  return (
    stateData.editing ?
      <SupplierEditor 
        key={stateData.selectedId || -1}
      /> :
      <div className="m-2">
        <SupplierTable />
        <div className="text-center">
          <button
            className="btn btn-primary m-1"
            onClick={() => {
              dispatch(startCreatingSupplier());
            }}
          >
            Create Supplier
          </button>
        </div>
      </div>
  );
};

export default SupplierDisplay;