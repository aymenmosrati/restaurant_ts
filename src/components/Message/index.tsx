import React from "react";
import "./_index.scss";
import ICError from "../../assets/img/IcError.svg";
import ICSuccess from "../../assets/img/IcSuccess.svg";
import ICWarning from "../../assets/img/IcWarning.svg";

type MessageProps = {
  text: string;
  status: string;
};

const Message = (props: MessageProps) => {
  return (
    <>
      <p className={`message ${props.status}`}>
        <img
          src={
            props.status === "error"
              ? `${ICError}`
              : props.status === "success"
              ? `${ICSuccess}`
              : `${ICWarning}`
          }
          alt={`IC${props.status}`}
        />
        {props.text}
      </p>
    </>
  );
};
export default Message;
