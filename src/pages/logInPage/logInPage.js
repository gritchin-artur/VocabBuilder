import { useFormik } from "formik";
import { LogInPageContainer } from "./logInPage.styled";
import { SigninSchema } from "utils/validationSchemas";
import { ShowRules } from "utils/showRules";

export function LogInPage() {
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: SigninSchema,

    onSubmit: (values) => {},
  });

  const { showPassword, getInputAlert, getHidePassword } = ShowRules(
    values,
    touched,
    errors
  );
  return (
    <LogInPageContainer>
      <div className="ImgContainer">
        <div className="RegisterImg" />
      </div>

      <div className="FormContainer">
        <h2 className="Title">Login</h2>
        <p className="Text">
          Please enter your login details to continue using our service:
        </p>
        <form className="Form">
          <div className="DivInput">
            <input
              id="logInEmail"
              name="email"
              type="email"
              placeholder="Email"
              className="Input"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {getInputAlert("email")}
          </div>

          <div className="DivInput" id="password">
            <input
              id="logInPassword"
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="Input"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {getInputAlert("password")}
            {values.password && getHidePassword()}
          </div>
          <button
            className="ButtonSubmit"
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
      <ul className="SkilsList">
        <li className="Skil">Word</li>
        <li className="Skil">Translation</li>
        <li className="Skil">Grammar</li>
        <li className="Skil">Progress</li>
      </ul>
    </LogInPageContainer>
  );
}
