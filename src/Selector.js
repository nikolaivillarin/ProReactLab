import React, { useState } from "react";

const Selector = props => {
  const [selection, setSelectionState] = 
    useState(React.Children.toArray(props.children)[0].props.name);

  const setSelection = (ev) => {
    ev.persist();

    setSelectionState(ev.target.name);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          {
            React.Children.map(props.children, c =>
              <button
                name={c.props.name}
                onClick={setSelection}
                className={`
                  btn btn-block m-2
                  ${selection === c.props.name ?
                    "btn-primary active" : "btn-secondary"}
                `}
              >
                {c.props.name}
              </button>
            )
          }
        </div>
        <div className="col">
          {
            React.Children.toArray(props.children)
              .filter(c => c.props.name === selection)
          }
        </div>
      </div>
    </div>
  );
};

export default Selector;