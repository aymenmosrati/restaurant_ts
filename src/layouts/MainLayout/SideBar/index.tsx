import { useState } from "react";
import { NavLink } from "react-router-dom";
import constants from "../../../utilities/constant";
import "./_index.scss";

const SideBar = () => {
  const [OpenSB, setOpenSB] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setOpenSB(!OpenSB);
    setRotation(rotation + 180);
  };

  return (
    <ul>
      <div className="SideBar-logo">
        <img src={logo} alt="logo" />
      </div>
      {constants?.SIDEBAR_LIST?.map((items) => (
        <NavLink to={items.url} key={items.id} className="link">
          <li key={items.id} className="linkTitle">
            <img src={items.icon} alt={items.name} className="iconLink" />
            <span className="">{items.name}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default SideBar;
