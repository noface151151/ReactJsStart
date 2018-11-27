import React from "react";
import { Link } from "react-router-dom";

const SideBarSubItem = props =>{
  const SubmenuItems = props.subMenu.map((subvalue, index) => {
    return (
      <li key={subvalue.id} className="menu-item">
        <Link
          className="menu-link"
          to={props.parentPath + subvalue.subMenuPath}
        >
          <span className="dot" />
          <span className="title">{subvalue.display}</span>
        </Link>
      </li>
    );
  });
  return(
    SubmenuItems
  )
}
export default SideBarSubItem;
