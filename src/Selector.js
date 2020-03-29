import React, { useState } from "react";

const Selector = props => {
  const [selection, setSelection] = 
    useState(React.Children.toArray(props.children)[0].props.name);
};

export default Selector;