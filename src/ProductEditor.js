import React, { useState } from "react";

const ProductEditor = props => {
  const formDataDefaults = {
    id: props.product.id || "",
    name: props.product.name || "",
    category: props.product.category || "",
    price: props.product.price || ""
  };
  const [formData, setFormData] = useState(formDataDefaults);

  const handleChange = (ev) => {
    ev.persist();

    setFormData(formData[ev.target.name] = ev.target.value);
  };

  const handleClick = () => {
    props.saveCallback(formData);
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
        <label>Category</label>
        <input 
          className="form-control"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input 
          className="form-control"
          name="price"
          value={formData.price}
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

export default ProductEditor;