import BGrestaurant from "../../../assets/img/IconComponent/BGrestaurant";
import Switch from "../../../components/Switch";
import { useAppDispatch } from "../../../hooks/hooksRedux";
import { switchToggel } from "../../../store/switchToggelSlice";
import "./_index.scss";
const Index = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="home">
        <BGrestaurant className="BGrestaurant-home" />
        <p className="home-description">
          Add vegan and vegetarian products to your restaurant and take part{" "}
          <span className="home-description-top-res">
            in the featured restaurants
          </span>
          from January 12th to 17th.
        </p>
      </div>
      <div className="home-search-category">
        <div className="home-select-city">
          <span>City</span>
          <select className="country">
            <option>Country</option>
            <option>Tunisia</option>
            <option>Istanbul</option>
            <option>Italie</option>
          </select>
        </div>
        <div className="home-select-city">
          <span>Restaurant Selection</span>
          <select className="country">
            <option>Frango Fit & Fresh (Baby...)</option>
          </select>
        </div>
        <div className="home-open-switch-toggel">
          <span>Restaurant</span>
          <div className="open-title-switch-icon">
            <span>Open</span>
            <Switch onClick={() => dispatch(switchToggel())} />
          </div>
        </div>
      </div>
      <div className="home-search-info">
        <div className="home-search-by">
          <span className="home-search-by-today active">Today</span>
          <span className="home-search-by-month">Month</span>
          <span className="home-search-by-period">Period</span>
        </div>
        <div className="home-info-search-statistique">
          <div className="home-statistique-number-orders"></div>
          <div className="home-statistique-delivery-time"></div>
          <div className="home-statistique-total-turnover"></div>
          <div className="home-statistique-average-amount"></div>
        </div>
      </div>
      <div>
        <div>picjzei</div>
        <div></div>
      </div>
      <div></div>
    </>
  );
};

export default Index;
