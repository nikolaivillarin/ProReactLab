import React from "react";
import { ProductTableRow } from "./ProductTableRow";

const ProductTable = props => {
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
          this.props.product.map(p => (
            <ProductTableRow 
              product={p}
              key={p.id}
              editCallback={this.props.editCallback}
              deleteCallback={this.props.deleteCallback}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default ProductTable;