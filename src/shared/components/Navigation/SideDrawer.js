import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>
  );
  return createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
