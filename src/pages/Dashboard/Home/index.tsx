import BGrestaurant from "../../../assets/img/IconComponent/BGrestaurant";
import IcDeliveryTime from "../../../assets/img/IcDeliveryTime.svg";
import IcNumberOrders from "../../../assets/img/IcNumberOrders.svg";
import IcTotalTurnover from "../../../assets/img/IcTotalTurnover.svg";
import IcAverageAmount from "../../../assets/img/IcAverageAmount.svg";
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
          Add vegan and vegetarian products to your restaurant and take part
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
          <div className="home-statistique number-orders">
            <img src={IcNumberOrders} alt="errIcNumberOrders" />
            <span>Number of Orders</span>
            <div>
              <span>1.234</span>
              <span>+2,4%</span>
            </div>
          </div>
          <div className="home-statistique delivery-time">
            <img src={IcDeliveryTime} alt="errIcDeliveryTime" />
            <span>Average delivery time</span>
            <div>
              <span>19 Dk</span>
              <span></span>
            </div>
          </div>
          <div className="home-statistique total-turnover">
            <img src={IcTotalTurnover} alt="errIcTotalTurnover" />
            <span>Total turnover </span>
            <div>
              <span>21.751 TL</span>
              <span>+2,4%</span>
            </div>
          </div>
          <div className="home-statistique average-amount">
            <img src={IcAverageAmount} alt="errIcAverageAmount" />
            <span>Average basket amount</span>
            <div>
              <span>32.80 TL</span>
              <span>-2,4%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-cards-info-restaurant-products">
        <div className="home-card-open-closed-products"></div>
        <div className="home-card-popular-products-week"></div>
      </div>
      <div></div>
    </>
  );
};

export default Index;
