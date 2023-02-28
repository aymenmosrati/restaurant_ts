import { useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import AngleDown from "../../../assets/img/IconComponent/AngleDown";
import constants from "../../../utilities/constant";
import logo from "../../../assets/img/MY-Restoran-Logo.svg";
import call from "../../../assets/img/Active-call.svg";
import { constantsType } from "../../../types/Constant.types";
import "./_index.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import CloseSidebarTrigger from "./OpenCloseSideBar";

type stateType = {
  idLink: number | null;
  openCloseChild: boolean;
};

type actionType = {
  type: "openChildLink" | "decrement";
  payload: number;
};

const initialState = { idLink: 0, openCloseChild: true };

function reducer(state: stateType, action: actionType) {
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
    <>
      {width >= 1090 ? (
        <ul className="sideBar">
          <div className="sideBar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sideBar-menu">
            <div className="sideBar-menu-link">
              <span className="sideBar-title">Menu</span>
              {constants?.SIDEBAR_LIST?.map((items: constantsType) => (
                <>
                  <NavLink
                    to={items.url}
                    key={items.id}
                    className="sideBar-link"
                    // onClick={() => handleId(items.id)}
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
                          // onClick={() => handleId(item.id)}
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
      ) : (
        <CloseSidebarTrigger />
      )}
    </>
  );
};

export default SideBar;
