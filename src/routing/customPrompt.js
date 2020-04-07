import React from "react";

const CustomPrompt = props => {
  let prompt = null;

  if (props.show) {
    prompt = (
      <div className="alert alert-warning m-2 text-center">
        <h4 className="alert-heading">
          Navigation Warning
        </h4>
        {props.message}
        <div className="p-1">
          <button
            className="btn btn-primary m-1"
            onClick={() => props.callback(true)}
          >
            Yes
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => props.callback(false)}
          >
            No
          </button>
        </div>
      </div>
    );
  }

  return prompt;
};

export default CustomPrompt;