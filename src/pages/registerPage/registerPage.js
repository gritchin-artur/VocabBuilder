import { NavLink, useNavigate } from "react-router-dom";
import { RegisterPageContainer } from "./registerPage.styled";
import { useFormik } from "formik";
import { SignupSchema } from "utils/validationSchemas";
import { ShowRules } from "utils/showRules";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      name: "",
      email: "",
      password: "",
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      dispatch(authOperations.register(values)).then(() =>
        navigate("/dictionary")
      );
    },
  });

  const {
    showPassword,
    getInputAlert,
    getHidePassword,
    getInputClass,
  } = ShowRules(values, touched, errors);
  return (
    <RegisterPageContainer>
      <div className="ImgContainer">
        <div className="RegisterImg" />
      </div>

      <div className="FormContainer">
        <h2 className="Title">Register</h2>
        <p className="Text">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form className="Form">
          <div className="DivInput">
            <input
              id="registerName"
              name="name"
              type="text"
              placeholder="Name"
              className={getInputClass("name")}
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {getInputAlert("name")}
          </div>
          <div className="DivInput">
            <input
              id="registerEmail"
              name="email"
              type="email"
              placeholder="Email"
              className={getInputClass("email")}
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {getInputAlert("email")}
          </div>
          <div className="DivInput" id="password">
            <input
              id="registerPassword"
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className={getInputClass("password")}
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
        <NavLink className="NavLogIn" to="/login">
          Login
        </NavLink>
      </div>
      <ul className="SkilsList">
        <li className="Skil">Word</li>
        <li className="Skil">Translation</li>
        <li className="Skil">Grammar</li>
        <li className="Skil">Progress</li>
      </ul>
    </RegisterPageContainer>
  );
}
