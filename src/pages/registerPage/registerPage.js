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
        <h2 className="Title">Register</h2>
        <p className="Text">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form className="Form">
          <input className="Input" placeholder="Name" />
          <input className="Input" placeholder="Email" />
          <input className="Input" placeholder="Password" />
          <button className="ButtonSubmit">Register</button>
        </form>
        <NavLink className="NavLogIn">Login</NavLink>
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
