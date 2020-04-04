import React, { useState } from "react";
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";
import { useDispatch, useSelector } from "react-redux";
import { saveSupplier } from "./store";

const SupplierDisplay = props => {
  const [showEditor, setShowEditor] = useState(false);
  const [selected, setSelected] = useState(null);
  const suppliers = useSelector(state => state.suppliers);
  const dispatch = useDispatch();

  const startEditing = (supplier) => {
    setShowEditor(true);
    setSelected(supplier);
  };

  const createSupplier = () => {
    setShowEditor(true);
    setSelected({});
  };

  const cancelEditing = () => {
    setShowEditor(false);
    setSelected(null);
  };

  const saveSupplierCallback = (supplier) => {
    setShowEditor(false);
    setSelected(null);

    dispatch(saveSupplier(supplier));
  };

  return (
    showEditor ?
      <SupplierEditor 
        key={selected.id || -1}
        supplier={selected}
        saveCallback={saveSupplierCallback}
        cancelCallback={cancelEditing}
      /> :
      <div className="m-2">
        <SupplierTable 
          suppliers={suppliers}
          editCallback={startEditing}
        />
        <div className="text-center">
          <button
            className="btn btn-primary m-1"
            onClick={createSupplier}
          >
            Create Supplier
          </button>
        </div>
      </div>
  );
};

export default SupplierDisplay;