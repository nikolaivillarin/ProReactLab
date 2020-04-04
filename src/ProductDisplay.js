import React from "react";
import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingProduct } from "./store";

const ProductDisplay = props => {
  const stateData = useSelector(state => state.stateData);
  const dispatch = useDispatch();

  return (
    stateData.editing ?
      <ProductEditor 
        key={stateData.selectedId || -1}
      /> :
      <div className="m-2">
        <ProductTable />
        <div className="text-center">
          <button 
            className="btn btn-primary m-1"
            onClick={() => {
              dispatch(startCreatingProduct());
            }}
          >
            Create Product
          </button>
        </div>
      </div>
  );
};

export default ProductDisplay;