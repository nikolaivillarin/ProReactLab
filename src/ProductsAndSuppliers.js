import React, { useState } from "react";
import Selector from "./Selector";
import ProductDisplay from "./ProductDisplay";
import SupplierDisplay from "./SupplierDisplay";

const ProductsAndSuppliers = props => {
  console.log(process.env.REACT_APP_CLIENT_ID); 
  console.log(process.env.REACT_APP_KEY);

  const productsDefaults = [
    { id: 1, name: "Kayak", category: "Watersports", price: 275 },
    { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 },
    { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.50 }
  ];

  const suppliersDefaults = [
    { id: 1, name: "Surf Dudes", city: "San Jose", products: [1, 2] },
    { id: 2, name: "Field Supplies", city: "New York", products: [3] }
  ];

  const [products, setProducts] = useState(productsDefaults);
  const [suppliers, setSuppliers] = useState(suppliersDefaults);

  let idCounter = 100;

  const saveData = (collection, item) => {
    if (item.id === "") {
      // Add new item
      item.id = idCounter++;

      if (collection === "products") {
        setProducts(
          products.concat(item)
        );
      } else if (collection === "suppliers") {
        setSuppliers(
          suppliers.concat(item)
        );
      }
    } else {
      // Edit item
      if (collection === "products") {
        const updatedData = products.map(
          product => product.id === item.id ?
            item : product
        );

        setProducts(updatedData);
      } else if (collection === "suppliers") {
        const updatedData = suppliers.map(
          supplier => supplier.id === item.id ?
            item : supplier
        );

        setSuppliers(updatedData);
      }
    }
  };

  const deleteData = (collection, item) => {
    if (collection === "products") {
      setProducts(
        products.filter(product => product.id !== item.id)
      );
    } else if (collection === "suppliers") {
      setSuppliers(
        suppliers.filter(supplier => supplier.id !== item.id)
      );
    }
  }

  return (
    <div>
      <Selector>
        <ProductDisplay 
          name="Products"
          products={products}
          saveCallback={p => saveData("products", p)}
          deleteCallback={p => deleteData("products", p)}
        />
        <SupplierDisplay 
          name="Suppliers"
          suppliers={suppliers}
          saveCallback={s => saveData("suppliers", s)}
          deleteCallback={s => deleteData("suppliers", s)}
        />
      </Selector>
    </div>
  );
};

export default ProductsAndSuppliers;