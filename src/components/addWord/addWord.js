import { Circle } from "rc-progress";
import { TrainingPageContainer } from "./addWord.styled";
import { ReactComponent as Ukraine } from "../../img/ukraine.svg";
import { ReactComponent as England } from "../../img/united kingdom.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal.svg";
import { useDispatch, useSelector } from "react-redux";
import { openModalWellDone } from "../../redux/modals/modal-slice";
import { useState } from "react";
import { answersWord } from "../../redux/data/data-operation";
import { useNavigate } from "react-router-dom";

export default function AddWord({ tasks }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.data.words);

  const [wordItem, setWordItem] = useState(0);
  const [answerTasks, setAnswerTasks] = useState([]);
  const [formTasks, setFormTasks] = useState({
    _id: tasks[wordItem]?._id,
    en: tasks[wordItem]?.en || "",
    ua: tasks[wordItem]?.ua || "",
    task: tasks[wordItem]?.task,
  });

  const sumPercent = data.results.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.progress;
  }, 0);

  const statistic = Math.round(sumPercent / data.results.length);

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    setFormTasks((prevFormTasks) => ({
      ...prevFormTasks,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (tasks.length > wordItem) {
      setWordItem((prevItem) => prevItem + 1);
      setFormTasks((prevFormTasks) => ({
        ...prevFormTasks,
        _id: tasks[wordItem + 1]?._id,
        en: tasks[wordItem + 1]?.en || "",
        ua: tasks[wordItem + 1]?.ua || "",
        task: tasks[wordItem + 1]?.task,
      }));

      if (formTasks[formTasks.task] !== "") {
        setAnswerTasks((prevTasks) => [...prevTasks, formTasks]);
      }
    }
  };

  const handleCancel = () => {
    window.history.back();
  };

  const handleSave = () => {
    handleSubmit();

    const updatedAnswerTasks =
      formTasks[formTasks.task] === ""
        ? [...answerTasks, formTasks]
        : answerTasks;
    dispatch(answersWord(updatedAnswerTasks)).then((response) => {
      isNaN(response.payload)
        ? dispatch(openModalWellDone()) && navigate("/dictionary")
        : navigate("/dictionary");
    });
  };

  const handleInputEn = (task) => {
    if (task === "en") {
      return 2;
    }
    return 1;
  };

  const handleInputUa = (task) => {
    if (task === "ua") {
      return 2;
    }
    return 1;
  };

  const validateEnglishInput = () => {
    const englishWordPattern = /^[A-Za-z]*$/;
    if (!englishWordPattern.test(formTasks.en.replace(" ", ""))) {
      return <p style={{ color: "red" }}>Please enter only English letters</p>;
    }
  };

  const validateUkrainianInput = () => {
    const ukrainianWordPattern = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$/;
    if (!ukrainianWordPattern.test(formTasks.ua.replace(" ", ""))) {
      return (
        <p style={{ color: "red" }}>
          Будь ласка, введіть лише українські літери
        </p>
      );
    }
  };

  return (
    tasks.length > 0 && (
      <TrainingPageContainer>
        <div className="CicleContainer">
          <Circle
            className="Circle"
            gapPosition="bottom"
            percent={statistic}
            strokeWidth={8}
            trailWidth={8}
            strokeColor={{
              "0%": "#c9cdcc",
              "100%": "#85aa9f",
            }}
            strokeLinecap="round"
            gapDegree={0}
          />
          <div className="Percent">{statistic}</div>
        </div>

        <form className="Form">
          <div className="FormContainer">
            <div
              id="ukrainian"
              className="InputContainer"
              style={{ order: handleInputUa(formTasks.task) }}
            >
              <input
                name="ukrainian"
                type="text"
                className="Input"
                placeholder="Введіть переклад"
                value={formTasks.ua}
                onChange={(e) => handleInputChange(e, "ua")}
              />
              {validateUkrainianInput && validateUkrainianInput()}
              {tasks.length > wordItem ? (
                <div
                  className="LangueButton"
                  onClick={handleSubmit}
                  style={{
                    display:
                      handleInputUa(formTasks.task) === 1 ? "flex" : "none",
                  }}
                >
                  Next <Switch />
                </div>
              ) : (
                handleSave()
              )}

              <div className="LangueName">
                <Ukraine />
                Ukrainian
              </div>
            </div>
            <div
              id="english"
              className="InputContainer"
              style={{ order: handleInputEn(formTasks.task) }}
            >
              <input
                name="english"
                type="text"
                className="Input"
                placeholder="Break in"
                value={formTasks.en}
                onChange={(e) => handleInputChange(e, "en")}
              />
              {validateEnglishInput && validateEnglishInput()}

              {tasks.length > wordItem ? (
                <div
                  className="LangueButton"
                  onClick={handleSubmit}
                  style={{
                    display:
                      handleInputEn(formTasks.task) === 1 ? "flex" : "none",
                  }}
                >
                  Next <Switch />
                </div>
              ) : (
                handleSave()
              )}
              <div className="LangueName">
                <England />
                English
              </div>
            </div>
          </div>
          <ul className="ButtonList">
            <li className="SaveButton" onClick={handleSave}>
              Save
            </li>
            <li className="CanselButton" onClick={handleCancel}>
              Cancel
            </li>
          </ul>
        </form>
      </TrainingPageContainer>
    )
  );
}
