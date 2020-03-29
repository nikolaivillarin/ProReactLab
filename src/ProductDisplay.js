import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";

const ProductDisplay = props => {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const startEditing = (product) => {
    setShowEditor(true);
    setSelectedProduct(product);
  };

  const createProduct = () => {
    setShowEditor(true);
    setSelectedProduct({});
  };

  const cancelEditing = () => {
    setShowEditor(false);
    setSelectedProduct(null);
  };

  const saveProduct = (product) => {
    setShowEditor(false);
    setSelectedProduct(null);

    props.saveCallback(product);
  };

  return (
    showEditor ?
      <ProductEditor 
        key={selectedProduct.id || -1}
        product={selectedProduct}
        saveCallback={saveProduct}
        cancelCallback={cancelEditing}
      /> :
      <div className="m-2">
        <ProductTable 
          products={props.products}
          editCallback={startEditing}
          deleteCallback={props.deleteCallback}
        />
        <div className="text-center">
          <button 
            className="btn btn-primary m-1"
            onClick={createProduct}
          >
            Create Product
          </button>
        </div>
      </div>
  );
};

export default ProductDisplay;