import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct, endEditing } from "./store";
import { PRODUCTS } from "./store/dataTypes";

const ProductEditor = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.modelData[PRODUCTS]);
  const selectedProductID = useSelector(state => state.stateData.selectedId);
  
  let selectedProduct = products.find(product => product.id === selectedProductID);

  if (selectedProduct === undefined) {
    selectedProduct = {};
  }

  const formDataDefaults = {
    id: selectedProduct.id || "",
    name: selectedProduct.name || "",
    category: selectedProduct.category || "",
    price: selectedProduct.price || ""
  };
  const [formData, setFormData] = useState(formDataDefaults);

  const handleChange = (ev) => {
    ev.persist();

    const updatedData = {
      ...formData,
      [ev.target.name]: ev.target.value
    }

    setFormData(updatedData);
  };

  const handleClick = () => {
    dispatch(saveProduct(formData));
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

export default ProductEditor;