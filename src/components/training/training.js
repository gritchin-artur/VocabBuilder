import { useNavigate } from "react-router-dom";
import { TrainingContainer } from "./training.styled";
import { useDispatch } from "react-redux";
import { openModalAddWord } from "../../redux/modals/modal-slice";

export default function Training() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddWord = () => {
    navigate("/dictionary");
    dispatch(openModalAddWord());
  };

  const handleCancel = () => {
    window.history.back();
  };
  return (
    <TrainingContainer>
      <div className="ContentContainer">
        <div className="ImgContainer">
          <div className="Img" />
        </div>
        <div className="TextContainer">
          <h2 className="Title">
            You don't have a single word to learn right now.{" "}
          </h2>
          <p className="Text">
            Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </p>
        </div>
        <ul className="ButtonList">
          <li className="AddWordButton" onClick={handleAddWord}>
            Add word
          </li>
          <li className="CancelButton" onClick={handleCancel}>
            Cancel
          </li>
        </ul>
      </div>
    </TrainingContainer>
  );
}
