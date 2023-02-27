import Menu1 from "../assets/img/IconMenu/Menu1.svg";
import Menu2 from "../assets/img/IconMenu/Menu2.svg";
import Menu3 from "../assets/img/IconMenu/Menu3.svg";
import Menu4 from "../assets/img/IconMenu/Menu4.svg";
import Menu5 from "../assets/img/IconMenu/Menu5.svg";
import Menu6 from "../assets/img/IconMenu/Menu6.svg";
import Menu7 from "../assets/img/IconMenu/Menu7.svg";
import Menu8 from "../assets/img/IconMenu/Menu8.svg";
import Menu9 from "../assets/img/IconMenu/Menu9.svg";
import Menu10 from "../assets/img/IconMenu/Menu10.svg";
import Menu11 from "../assets/img/IconMenu/Menu11.svg";

export default {
  // HEADERS_API: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },

  // DRAWER_WIDTH: 280,

  SIDEBAR_LIST: [
    {
      id: 0,
      icon: Menu1,
      name: "Home page",
      url: "/Home page",
      type: "route",
      permission: false,
    },
    {
      id: 1,
      icon: Menu2,
      name: "Orders",
      url: "/Orders",
      type: "route",
      permission: false,
      angleDown: true,
      child: [
        { id: 1.0, name: "Wait for acceptance" },
        { id: 1.1, name: "Active Orders" },
        { id: 1.2, name: "Past Orders" },
      ],
    },
    {
      id: 2,
      icon: Menu3,
      name: "Menu Operations",
      url: "/Menu Operations",
      type: "route",
      permission: false,
      angleDown: true,
      child: [
        { id: 2.0, name: "Menu" },
        { id: 2.1, name: "Material" },
        { id: 2.2, name: "Options" },
      ],
    },
    {
      id: 3,
      icon: Menu4,
      name: "Restaurant Info",
      url: "/Restaurant Info",
      type: "route",
      permission: false,
      angleDown: true,
      child: [
        { id: 3.0, name: "General Information" },
        { id: 3.1, name: "financial information" },
        { id: 3.2, name: "User operations" },
        { id: 3.3, name: "Point of sale integration" },
        { id: 3.4, name: "documents" },
      ],
    },
    {
      id: 4,
      icon: Menu5,
      name: "Restaurant Open/Close",
      url: "/Restaurant Open/Close",
      type: "route",
      permission: false,
    },
    {
      id: 5,
      icon: Menu6,
      name: "Accounting",
      url: "/Accounting",
      type: "route",
      permission: false,
      angleDown: true,
      child: [
        { id: 5.0, name: "Payment schedule" },
        { id: 5.1, name: "Invoices" },
      ],
    },
    {
      id: 6,
      icon: Menu7,
      name: "Working hours",
      url: "/Working hours",
      type: "route",
      permission: false,
    },
    {
      id: 7,
      icon: Menu8,
      name: "Payment methods",
      url: "/Payment methods",
      type: "route",
      permission: false,
    },
    {
      id: 8,
      icon: Menu9,
      name: "Restaurant Review",
      url: "/Restaurant Review",
      type: "route",
      permission: false,
    },
    {
      id: 9,
      icon: Menu10,
      name: "Requests",
      url: "/Requests",
      type: "route",
      permission: false,
    },
    {
      id: 10,
      icon: Menu11,
      name: "Live Help",
      url: "/Live Help",
      type: "route",
      permission: false,
    },
  ],

  SIDEBAR_LIST_Question: [
    {
      id: 0,
      name: "Quiz1",
    },
    {
      id: 1,
      name: "Quiz2",
    },
  ],
};
