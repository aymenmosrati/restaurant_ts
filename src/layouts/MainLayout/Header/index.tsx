import { useAppDispatch, useAppSelector } from "../../../hooks/hooksRedux";
import { closeLogOut, closeNotification } from "../../../store/modalSlice";
import AngleDown from "../../../assets/img/IconComponent/AngleDown";
import notification from "../../../assets/img/notification.svg";
import Notification from "./Notification";
import LogOut from "./LogOut";
import "./_index.scss";

const Header = () => {
  const { showLogOut, showNotification } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();
  // <marquee behavior="scroll" direction="left"> Home page</marquee>

  return (
    <>
      <div className="header">
        <span className="header-title">Home page</span>
        <div className="header-compte">
          <img
            src={notification}
            alt=""
            className="header-compte-notif"
            onClick={() => dispatch(closeNotification(true))}
          />
          <div className="header-compte-info">
            <span className="header-compte-info-name">Murat G.</span>
            <span className="header-compte-info-role">Restaurant Manager</span>
          </div>
          <div
            className="header-AngleDown"
            onClick={() => dispatch(closeLogOut(true))}
          >
            <AngleDown className="AngleDown" />
          </div>
        </div>
      </div>
      {showLogOut && <LogOut />}
      {showNotification && <Notification />}
    </>
  );
};

export default Header;
