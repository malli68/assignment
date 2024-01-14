import React from "react";
import { SIDEBAR_ITEMS } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location= useLocation();
    console.log(location)
  return (
    <div>
      <nav className="sidebar">
        {SIDEBAR_ITEMS.map((item) => {
          return (
            <>
              <Link key={item.id} to={item.path} >
                <li className={item.path === location.pathname ? "active":''}>{item.label}</li>
              </Link>
            </>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
