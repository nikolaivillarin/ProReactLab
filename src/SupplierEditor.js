import React, { useState } from "react";

const SupplierEditor = props => {
  const formDataDefault = {
    id: props.supplier.id || "",
    name: props.supplier.name || "",
    city: props.supplier.city || "",
    products: props.supplier.products || []
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
    props.saveCallback({
      ...formData,
      products: formData.products.map(val => Number(val))
    });
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
          onClick={props.cancelCallback}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SupplierEditor;