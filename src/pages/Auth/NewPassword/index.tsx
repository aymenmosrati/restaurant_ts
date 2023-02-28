import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Message from "../../../components/Message";
import { newPassType } from "../../../types/User.types";
import { useAppSelector } from "../../../hooks/hooksRedux";

const initialValues = {
  newPassword: "",
  newPasswordAgain: "",
};

const NewPassSchema = Yup.object().shape({
  newPassword: Yup.string().required("required").min(8, "min"),
  newPasswordAgain: Yup.string()
    .required()
    .oneOf([Yup.ref("newPassword")], "samePassword"),
});

const onSubmit = (values: newPassType) => {
  console.log("form data", values);
};

const NewPassword = () => {
  const { showNewPass, showNewPassAgain } = useAppSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: NewPassSchema,
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
            formik.errors.newPassword && formik.touched.newPassword && "error"
          }`}
          name="newPassword"
          secure="show-password"
          onChange={(e) => {
            formik.setFieldValue("password", e.target.value);
          }}
          onBlur={formik.handleBlur}
        />
        {/* {formik.errors.newPassword && formik.touched.newPassword ? (
          <Message text={formik.errors.newPassword} status="error" />
        ) : null} */}
        <Message
          text={"It must consist of at least 8 characters."}
          status={formik.errors.newPassword === "min" ? "error" : "success"}
        />
        <Message
          text="It must contain at least one Uppercase and one Lowercase letter."
          status={formik.errors.newPassword === "min" ? "error" : "success"}
        />
        <Message
          text="It must contain at least one number."
          status={formik.errors.newPassword === "min" ? "error" : "success"}
        />
      </div>
      <div className="login-form-password">
        <Label htmlFor="" label="New Password (Again)" />
        <Input
          type={showNewPassAgain ? "text" : "password"}
          className={`input ${
            formik.errors.newPasswordAgain &&
            formik.touched.newPasswordAgain &&
            "error"
          }`}
          name="newPasswordAgain"
          secure="show-password"
          onChange={(e) => {
            formik.setFieldValue("password", e.target.value);
          }}
          onBlur={formik.handleBlur}
        />
        <Message
          text="The entered password must be the same."
          status={
            formik.errors.newPasswordAgain === "samePassword"
              ? "error"
              : "success"
          }
        />
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
