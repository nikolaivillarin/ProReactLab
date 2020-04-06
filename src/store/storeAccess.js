import React from "react";
import { useSelector } from "react-redux";
import { PRODUCTS } from "./dataTypes";

const StoreAccess = () => {
  const product = useSelector(store => store.modelData[PRODUCTS][0]);
  const state = useSelector(store => store.stateData);

  return (
    <div className="bg-info">
      <pre className="text-white">
        {
          JSON.stringify(product, null, 2)
        }
      </pre>
      <pre className="text-white">
        {
          JSON.stringify(state, null, 2)
        }
      </pre>
    </div>
  );
}

export default StoreAccess;