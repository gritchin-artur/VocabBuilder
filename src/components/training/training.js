import { TrainingContainer } from "./training.styled";

export default function Training() {
  return (
    <TrainingContainer>
      <div>
        <div className="Img" />
        <h2 className="Title">
          You don't have a single word to learn right now.{" "}
        </h2>
        <p className="Text">
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
        </p>
      </div>
      <ul className="ButtonList">
        <li className="AddWordButton"></li>
        <li className="CancelButton"></li>
      </ul>
    </TrainingContainer>
  );
}
