import { useFormik } from "formik";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Message from "../../../components/Message";
import { userTypes } from "../../../types/User.types";
import { useAppDispatch, useAppSelector } from "../../../utilities/hooks";

const initialValues = {
  email: "",
  password: "",
} as userTypes;
const onSubmit = (values: userTypes) => {
  console.log("form data", values);
};

const validate = (values: userTypes) => {
  let errors = {} as userTypes;
  if (!values.email) {
    errors.email = "Please enter your email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Please enter your password";
  }
  return errors;
};

const NewPassword = () => {
  const { showNewPass, showNewPassAgain } = useAppSelector(
    (state) => state.auth
  );
  // const { showPopup } = useAppSelector((state) => state.modal);
  // const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <h3 className="login-form-title">Reset Password</h3>
      <span className="login-form-description">
        You can change it by entering your new password in the fields below.
      </span>
      <div className="login-form-password">
        <Label htmlFor="" label="New Password" />
        <Input
          type={showNewPass ? "text" : "password"}
          className={`input ${
            formik.errors.password && formik.touched.password && "error"
          }`}
          name="newPassword"
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
      <div className="login-form-password">
        <Label htmlFor="" label="New Password (Again)" />
        <Input
          type={showNewPassAgain ? "text" : "password"}
          className={`input ${
            formik.errors.password && formik.touched.password && "error"
          }`}
          name="newPasswordAgain"
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
      <Button
        text="Login"
        className="button-login"
        onClick={() => console.log("Login btn")}
      />
    </form>
  );
};

export default NewPassword;
