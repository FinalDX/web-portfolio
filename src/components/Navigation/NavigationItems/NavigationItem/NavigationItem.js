import React from "react";
import Link from "../../../UI/Link/Link";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem} onClick={props.clicked}>
    <Link
      to={props.link}
      exact
      activeStyle={{
        color: "#6699cc",
        borderBottom: "2px solid #6699cc",
        paddingBottom: "4px"
      }}
    >
      {props.children}
    </Link>
  </li>
);

export default navigationItem;
