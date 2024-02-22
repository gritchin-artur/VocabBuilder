import { NavLink } from "react-router-dom";
import { RegisterPageContainer } from "./registerPage.styled";
import Illustration from "../../img/illustration.png";

export function RegisterPage() {
  return (
    <RegisterPageContainer>
      <div className="ImgContainer">
        <img className="RegisterImg" alt="Illustration" src={Illustration} />
      </div>

      <div className="FormContainer">
        <h2>Register</h2>
        <p>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form>
          <input />
          <input />
          <input />
          <button>Register</button>
        </form>
        <NavLink>Login</NavLink>
      </div>
    </RegisterPageContainer>
  );
}
