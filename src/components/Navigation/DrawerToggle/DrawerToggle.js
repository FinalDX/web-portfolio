import React from "react";
import { IoMdMenu } from "react-icons/io";

import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "../../UI/Backdrop/Backdrop";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle}>
      <div>
        <IoMdMenu
          size="2em"
          onClick={props.clicked}
          style={{ cursor: "pointer" }}
        />
      </div>
      <SideDrawer show={props.show} clicked={props.clicked} />
      <Backdrop show={props.show} clicked={props.clicked} />
    </div>
  );
};

export default drawerToggle;
