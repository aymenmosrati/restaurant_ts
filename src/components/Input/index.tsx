import {
  showNewPasswordAgain,
  showNewPassword,
  showPassword,
} from "../../store/authSlice";
import "./_index.scss";
import Visible from "../../assets/img/IconComponent/Visible";
import Hidden from "../../assets/img/IconComponent/Hidden";
import { useAppDispatch, useAppSelector } from "../../utilities/hooks";

type InputProps = {
  type: "password" | "text" | "email";
  className: string;
  name: string;
  secure?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { ...rest } = props;
  const dispatch = useAppDispatch();
  const { showPassLogin, showNewPass, showNewPassAgain } = useAppSelector(
    (state) => state.auth
  );
  return (
    <>
      <input {...rest} />
      {props.secure != null && (
        <span
          className={props.secure}
          onClick={() => {
            props.name === "password"
              ? dispatch(showPassword())
              : props.name === "newPassword"
              ? dispatch(showNewPassword())
              : dispatch(showNewPasswordAgain());
          }}
        >
          {props.name === "password" && showPassLogin ? (
            <Visible />
          ) : props.name === "newPassword" && showNewPass ? (
            <Visible />
          ) : props.name === "newPasswordAgain" && showNewPassAgain ? (
            <Visible />
          ) : (
            <Hidden />
          )}
        </span>
      )}
    </>
  );
};
export default Input;
