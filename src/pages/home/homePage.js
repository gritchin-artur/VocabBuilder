import { HomePageContainer } from "./homePage.styled";
import { ReactComponent as Logo } from "../../img/CraftworkHome.svg";

export default function HomePage() {
  return (
    <HomePageContainer>
      <div className="LogoContainer">
        <Logo />
        <h2 className="LogoTitle">VocabBuilder</h2>
      </div>
    </HomePageContainer>
  );
}
