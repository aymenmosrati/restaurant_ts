import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleReCAPTCHA from "../../../components/ReCAPTCHA";
import Checkbox from "../../../components/Checkbox";
import Message from "../../../components/Message";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import BGrestaurant from "../../../assets/img/IconComponent/BGrestaurant";
import Logo from "../../../assets/img/IconComponent/Logo";
import Dots from "../../../assets/img/Dots.svg";
import ForgotPassword from "../ForgotPassword";
import { showModal } from "../../../store/modalSlice";
import NewPassword from "../NewPassword";
import "./_index.scss";
import { userTypes } from "../../../types/User.types";
import { useAppDispatch, useAppSelector } from "../../../utilities/hooks";

const initialValues = {
  email: "",
  password: "",
} as userTypes;

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "It must consist of at least 8 characters."),
});

const onSubmit = (values: userTypes) => {
  console.log("form data", values);
};

const Login = () => {
  const { showPassLogin, newPass } = useAppSelector((state) => state.auth);
  const { showPopup } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: LogInSchema,
  });
  return (
    <>
      <div className="login">
        <div className="login-design">
          <Logo className="login-logo" />
          <img src={Dots} className="login-design-dot1" alt="dot1" />
          <img src={Dots} className="login-design-dot2" alt="dot2" />
          <p className="login-design-description">
            Welcome to Migros Restaurant Panel
          </p>
          <BGrestaurant className="BGrestaurant" />
        </div>
        {newPass ? (
          <NewPassword />
        ) : (
          <form className="login-form" onSubmit={formik.handleSubmit}>
            <h3 className="login-form-title">Login</h3>
            <span className="login-form-description">
              Please enter your information and start your journey.
            </span>
            <div className="login-form-email">
              <Label htmlFor="" label="E-mail address" />
              <Input
                type="email"
                className={`input ${
                  formik.errors.email && formik.touched.email && "error"
                }`}
                name="email"
                //  value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <Message text={formik.errors.email} status="error" />
              ) : null}
            </div>
            <div className="login-form-password">
              <Label htmlFor="" label="Password" />
              <Input
                type={showPassLogin ? "text" : "password"}
                className={`input ${
                  formik.errors.password && formik.touched.password && "error"
                }`}
                name="password"
                secure="show-password"
                // value={formik.values.password}
                onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                  // formik.setValues((values) => {
                  //   return { ...values, password: e.target.value };
                  // });
                }}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <Message text={formik.errors.password} status="error" />
              ) : null}
            </div>
            <div className="remember-forget-pass">
              <span className="remember-me">
                <Checkbox id="Login-check-remember-me" />
                <Label label="Remember me" htmlFor="Login-check-remember-me" />
              </span>
              <span
                className="forget-password"
                onClick={() => dispatch(showModal(true))}
              >
                Forgot password?
              </span>
            </div>
            <span className="verify-recaptcha">
              <GoogleReCAPTCHA />
            </span>
            <Button
              text="Login"
              className="button-login"
              onClick={() => console.log("")}
            />
            <p className="login-form-description-help">
              If you encounter a problem while logging into the system, please
              contact
              <span className="login-form-description-help-email">
                {" "}
                Yemekoperasyonekibi@migrosonline.com
              </span>
              .
            </p>
          </form>
        )}
      </div>
      {showPopup && <ForgotPassword />}
    </>
  );
};

export default Login;
