import { LogInPageContainer } from "./logInPage.styled";

export function LogInPage() {
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
          <input className="Input" placeholder="Email" />
          <input className="Input" placeholder="Password" />
          <button className="ButtonSubmit">Register</button>
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
