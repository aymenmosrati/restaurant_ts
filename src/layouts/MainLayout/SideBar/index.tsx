import { useState } from "react";
import { NavLink } from "react-router-dom";
import constants from "../../../utilities/constant";
import logo from "../../../assets/img/MY-Restoran-Logo.svg";
import call from "../../../assets/img/Active-call.svg";
import "./_index.scss";

const SideBar = () => {
  const [OpenSB, setOpenSB] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setOpenSB(!OpenSB);
    setRotation(rotation + 180);
  };

  return (
    <ul className="sideBar">
      <div className="sideBar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="sideBar-menu">
        <div className="sideBar-menu-link">
          <span className="sideBar-title">Menu</span>
          {constants?.SIDEBAR_LIST?.map((items) => (
            <NavLink to={items.url} key={items.id} className="sideBar-link">
              <li key={items.id} className="sideBar-linkTitle">
                <img
                  src={items.icon}
                  alt={items.name}
                  className="sideBar-iconLink"
                />
                <span className="">{items.name}</span>
              </li>
            </NavLink>
          ))}
        </div>
        <div className="sideBar-header">
          <p>Order Support Line</p>
          <div>
            <img src={call} alt="call" />
            <span>0850 319 29 29</span>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default SideBar;
