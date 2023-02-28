import { useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import AngleDown from "../../../assets/img/IconComponent/AngleDown";
import constants from "../../../utilities/constant";
import logo from "../../../assets/img/MY-Restoran-Logo.svg";
import call from "../../../assets/img/Active-call.svg";
import "./_index.scss";
import { constantsType } from "../../../types/Constant.types";
import useWindowSize from "../../../hooks/useWindowSize";
import IcTrigger from "../../../components/IcTrigger";
type CounterState = {
  idLink: number | null;
  openCloseChild: boolean;
};

type UpdateAction = {
  type: "openChildLink" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;

const initialState = { idLink: 0, openCloseChild: true };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "openChildLink":
      if (state.idLink === action.payload) {
        return {
          idLink: action.payload,
          openCloseChild: !state.openCloseChild,
        };
      } else {
        return {
          idLink: action.payload,
          openCloseChild: true,
        };
      }
    // case "decrement":
    //   return { idLink: state.idLink };
    // case "reset":
    //   return initialState;
    default:
      return state;
  }
}

const SideBar = () => {
  const [state, dispatchReducer] = useReducer(reducer, initialState);
  const { width } = useWindowSize();
  return (
    <ul className="sideBar">
      {width < 1090 ? (
        <IcTrigger className="close-sidebar" isOpen={false} />
      ) : (
        <div className="sideBar-logo">
          <img src={logo} alt="logo" />
        </div>
      )}
      <div className="sideBar-menu">
        <div className="sideBar-menu-link">
          <span className="sideBar-title">Menu</span>
          {constants?.SIDEBAR_LIST?.map((items: constantsType) => (
            <>
              <NavLink
                to={items.url}
                key={items.id}
                className="sideBar-link"
                onClick={() =>
                  dispatchReducer({
                    type: "openChildLink",
                    payload: items.id,
                  })
                }
              >
                <li
                  key={items.id}
                  className={
                    items.id === state.idLink
                      ? "sideBar-link-title active"
                      : "sideBar-link-title"
                  }
                >
                  <img
                    src={items.icon}
                    alt={items.name}
                    className="sideBar-iconLink"
                  />
                  <span className="">{items.name}</span>
                  {items.angleDown && (
                    <>
                      <AngleDown
                        className={
                          items.id === state.idLink && state.openCloseChild
                            ? "sideBar-link-angleDown rotate-angleDown"
                            : "sideBar-link-angleDown"
                        }
                      />
                    </>
                  )}
                </li>
              </NavLink>
              {items.id === state.idLink && state.openCloseChild && (
                <ul>
                  {items?.child?.map((item) => (
                    <li
                      className={
                        // item.id === state.idLink
                        //   ? "sideBar-link-child-title active"
                        "sideBar-link-child-title"
                      }
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
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
