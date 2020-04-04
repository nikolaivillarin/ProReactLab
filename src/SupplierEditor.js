import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSupplier, endEditing } from "./store";
import { SUPPLIERS } from "./store/dataTypes";

const SupplierEditor = props => {
  const dispatch = useDispatch();
  const suppliers = useSelector(state => state.modelData[SUPPLIERS]);
  const selectedSupplierID = useSelector(state => state.stateData.selectedId);

  let selectedSupplier = suppliers.find(supplier => supplier.id === selectedSupplierID);

  if (selectedSupplier === undefined) {
    selectedSupplier = {};
  }

  const formDataDefault = {
    id: selectedSupplier.id || "",
    name: selectedSupplier.name || "",
    city: selectedSupplier.city || "",
    products: selectedSupplier.products || []
  };

  const [formData, setFormData] = useState(formDataDefault);

  const handleChange = (ev) => {
    ev.persist();

    const updatedData = {
      ...formData,
      [ev.target.name]:
        ev.target.name === "products" ?
          ev.target.value.split(",") :
          ev.target.value
    };

    setFormData(updatedData);
  };

  const handleClick = () => {
    dispatch(saveSupplier(formData));
    dispatch(endEditing());
  };

  return (
    <div className="m-2">
      <div className="form-group">
        <label>ID</label>
        <input 
          className="form-control"
          name="id"
          disabled
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input 
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input 
          className="form-control"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Products</label>
        <input 
          className="form-control"
          name="products"
          value={formData.products}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary m-1"
          onClick={handleClick}
        >
          Save
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(endEditing());
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SupplierEditor;