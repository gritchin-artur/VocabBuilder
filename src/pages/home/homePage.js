import { HomePageContainer } from "./homePage.styled";
import { ReactComponent as Logo } from "../../img/CraftworkHome.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <HomePageContainer>
      <NavLink className="LogoContainer" to={!isLoggedIn && "register"}>
        <Logo />
        <h2 className="LogoTitle">VocabBuilder</h2>
      </NavLink>
    </HomePageContainer>
  );
}
