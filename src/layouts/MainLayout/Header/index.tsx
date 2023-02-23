import "./_index.scss";
import notification from "../../../assets/img/notification.svg";
import AngleDown from "../../../assets/img/IconComponent/AngleDown";
const Header = () => {
  return (
    <div className="header">
      <span className="header-title">Home page</span>
      <div className="header-compte">
        <img src={notification} alt="" className="header-compte-notif" />
        <div className="header-compte-info">
          <span className="header-compte-info-name">Murat G.</span>
          <span className="header-compte-info-role">Restaurant Manager</span>
        </div>
        <AngleDown />
      </div>
    </div>
  );
};

export default Header;
