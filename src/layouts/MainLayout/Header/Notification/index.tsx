import { closeNotification } from "../../../../store/modalSlice";
import { useAppDispatch } from "../../../../hooks/hooksRedux";
import notification from "../../../../assets/img/notification.svg";
import Modale from "../../../../components/Modal";
import "./_index.scss";
import IcSuccess from "../../../../assets/img/IcSuccess.svg";
import IcWarning from "../../../../assets/img/IcWarning.svg";
import IcError from "../../../../assets/img/IcError.svg";

const Index = () => {
  const dispatch = useAppDispatch();

  return (
    <Modale className="notification">
      <div className="modal-close-notif">
        <img
          src={notification}
          alt=""
          className="icon-notification"
          onClick={() => dispatch(closeNotification(false))}
        />
      </div>
      <div className="modal-notification-content">
        <div className="modal-notification-title">
          <span className="modal-notification-title-name">Notifications</span>
          <span
            className="modale-notification-close"
            onClick={() => dispatch(closeNotification(false))}
          >
            &times;
          </span>
        </div>
        <div className="all-notification">
          <div className="message-notif">
            <span className="message-notif-close">&times;</span>
            <div className="message-notif-title">
              <div className="message-notif-title-name">
                <div className="icon-Warning"></div>
                <span>Alert Message</span>
              </div>
              <span className="message-notif-title-date">
                December 13, 10:38
              </span>
            </div>
            <span className="message-notif-content">
              Lorem ipsum dolar sit amet.
            </span>
          </div>

          <div className="message-notif">
            <div className="message-notif-close">&times;</div>
            <div className="message-notif-title">
              <div className="message-notif-title-name">
                <div className="icon-error"></div>
                <span>Alert Message</span>
              </div>
              <span className="message-notif-title-date">
                December 13, 10:38
              </span>
            </div>
            <span className="message-notif-content">
              Lorem ipsum dolar sit amet.
            </span>
          </div>

          <div className="message-notif">
            <span className="message-notif-close">&times;</span>
            <div className="message-notif-title">
              <div className="message-notif-title-name">
                <img src={IcSuccess} alt="IcSuccess" />
                <span>Alert Message</span>
              </div>
              <span className="message-notif-title-date">
                December 13, 10:38
              </span>
            </div>
            <span className="message-notif-content">
              Lorem ipsum dolar sit amet.
            </span>
          </div>

          <div className="message-notif">
            <span className="message-notif-close">&times;</span>
            <div className="message-notif-title">
              <div className="message-notif-title-name">
                <img src={IcWarning} alt="IcWarning" />
                <span>Alert Message</span>
              </div>
              <span className="message-notif-title-date">
                December 13, 10:38
              </span>
            </div>
            <span className="message-notif-content">
              Lorem ipsum dolar sit amet.
            </span>
          </div>

          <div className="message-notif">
            <span className="message-notif-close">&times;</span>
            <div className="message-notif-title">
              <div className="message-notif-title-name">
                <img src={IcError} alt="IcError" />
                <span>Alert Message</span>
              </div>
              <span className="message-notif-title-date">
                December 13, 10:38
              </span>
            </div>
            <span className="message-notif-content">
              Lorem ipsum dolar sit amet.
            </span>
          </div>
        </div>
      </div>
    </Modale>
  );
};

export default Index;
