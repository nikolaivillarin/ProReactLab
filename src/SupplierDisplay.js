import React, { useState } from "react";
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";

const SupplierDisplay = props => {
  const [showEditor, setShowEditor] = useState(false);
  const [selected, setSelected] = useState(null);

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

  const saveSupplier = (supplier) => {
    setShowEditor(false);
    setSelected(null);

    props.saveCallback(supplier);
  };

  return (
    showEditor ?
      <SupplierEditor 
        key={selected.id || -1}
        supplier={selected}
        saveCallback={saveSupplier}
        cancelCallback={cancelEditing}
      /> :
      <div className="m-2">
        <SupplierTable 
          suppliers={props.suppliers}
          editCallback={startEditing}
          deleteCallback={deleteCallback}
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