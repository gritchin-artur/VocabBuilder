import { Circle } from "rc-progress";
import { TrainingPageContainer } from "./addWord.styled";
import { ReactComponent as Ukraine } from "../../img/ukraine.svg";
import { ReactComponent as England } from "../../img/united kingdom.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal.svg";

export default function AddWord() {
  return (
    <TrainingPageContainer>
      <div className="CicleContainer">
        <Circle
          className="Circle"
          gapPosition="bottom"
          percent="70"
          strokeWidth={8}
          trailWidth={8}
          strokeColor={{
            "0%": "#c9cdcc",
            "100%": "#85aa9f",
          }}
          strokeLinecap="round"
          gapDegree={0}
        />
        <span className="Percent">70</span>
      </div>

      <form className="Form">
        <div className="FormContainer">
          <div id="ukrainian" className="InputContainer">
            <input className="Input" placeholder="Введіть переклад" />
            <div className="LangueButton">
              Next <Switch />
            </div>
            <div className="LangueName">
              <Ukraine /> Ukrainian
            </div>
          </div>
          <div className="InputContainer">
            <input className="Input" placeholder="Break in" />
            <div className="LangueName">
              <England /> English
            </div>
          </div>
        </div>
        <ul className="ButtonList">
          <li className="SaveButton">Save</li>
          <li className="CanselButton">Cancel</li>
        </ul>
      </form>
    </TrainingPageContainer>
  );
}
