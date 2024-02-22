import { HomePageContainer } from "./homePage.styled";
import { ReactComponent as Logo } from "../../img/CraftworkHome.svg";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <HomePageContainer>
      <NavLink className="LogoContainer" to="register">
        <Logo />
        <h2 className="LogoTitle">VocabBuilder</h2>
      </NavLink>
    </HomePageContainer>
  );
}
