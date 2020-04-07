import React from "react";
import { Link } from "react-router-dom";

const RouteInfo = props => {
  const renderTable = (title, prop, propertyNames) => {
    return (
      <>
        <tr>
          <th
            colSpan="2"
            className="text-center"
          >
            {title}
          </th>
        </tr>
        {propertyNames.map(p => 
          <tr key={p}>
            <td>{p}</td>
            <td>{JSON.stringify(prop[p])}</td>
          </tr>)
        }
      </>
    );
  };

  return (
    <div className="bg-info m-2 p-2">
      <h4 className="text-white text-center">
        Route Info
      </h4>
      <table className="table table-sm table-striped bg-light">
        <tbody>
          {renderTable("Match", props.match, ["url", "path", "params", "isExact"])}
          {renderTable("Location", props.location, ["key", "pathname", "search", "hash", "state"])}
        </tbody>
      </table>
      <div className="text-center m-2 bg-light">
        <Link
          className="btn btn-primary m-2"
          to={props.location}
        >
          Location
        </Link>
      </div>
    </div>
  );
};

export default RouteInfo;