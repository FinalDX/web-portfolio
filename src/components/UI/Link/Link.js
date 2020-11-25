import React from "react";

const link = (props) => {
  return <a href={props.to}>{props.children}</a>;
};

export default link;
