import React from "react";
import { useDispatch } from "react-redux";
import {
  showNewPasswordAgain,
  showNewPassword,
  showPassword,
} from "../../store/authSlice";
import "./_index.scss";

type InputProps = {
  type: string;
  className: string;
  name: string;
  secure?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { ...rest } = props;
  const dispatch = useDispatch();
  return (
    <>
      <input {...rest} />
      {props.secure != null && (
        <span
          className={props.secure}
          onClick={() => {
            console.log("azerty");

            // props.name === "password"
            //   ? dispatch(showPassword())
            //   : props.name === "newPassword"
            //   ? dispatch(showNewPassword())
            //   : dispatch(showNewPasswordAgain());
          }}
        >
          Show
        </span>
      )}
    </>
  );
};
export default Input;
