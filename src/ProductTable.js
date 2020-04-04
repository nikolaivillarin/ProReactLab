import React from "react";
import { useSelector } from "react-redux";
import ProductTableRow from "./ProductTableRow";
import { PRODUCTS } from "./store/dataTypes";

const ProductTable = props => {
  const products = useSelector(state => state.modelData[PRODUCTS]);

  return(
    <table className="table table-sm table-striped table-bordered">
      <thead>
        <tr>
          <th
            colSpan="5"
            className="bg-primary text-white text-center h4"
          >
            Products
          </th>
        </tr>
        <tr>
          <th>
            ID
          </th>
          <th>
            Name
          </th>
          <th>
            Category
          </th>
          <th className="text-right">
            Price
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(p => (
            <ProductTableRow 
              product={p}
              key={p.id}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default ProductTable;