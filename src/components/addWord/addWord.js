import { Circle } from "rc-progress";
import { TrainingPageContainer } from "./addWord.styled";
import { ReactComponent as Ukraine } from "../../img/ukraine.svg";
import { ReactComponent as England } from "../../img/united kingdom.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal.svg";
import { useDispatch, useSelector } from "react-redux";
import { openModalWellDone } from "../../redux/modals/modal-slice";
import { useEffect, useState } from "react";
import { answersWord } from "../../redux/data/data-operation";

export default function AddWord({ tasks }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.words);
  const isLoadingAnswers = useSelector((state) => state.data.isLoadingAnswers);

  const [wordItem, setWordItem] = useState(0);
  const [answerTasks, setAnswerTasks] = useState([]);
  const [formTasks, setFormTasks] = useState({
    _id: tasks[wordItem]?._id,
    en: tasks[wordItem]?.en || "",
    ua: tasks[wordItem]?.ua || "",
    task: tasks[wordItem]?.task,
  });

  const findId = data.results.find((item) => item._id === formTasks._id);

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    console.log(value);
    setFormTasks((prevFormTasks) => ({
      ...prevFormTasks,
      [name]: value.trim(),
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
    }
  };

  useEffect(() => {
    setAnswerTasks((prevTasks) => [...prevTasks, formTasks]);
  }, [formTasks]);

  const handleCancel = () => {
    window.history.back();
  };

  const handleSave = () => {
    const { _id, en, ua, task } = formTasks;
    if (_id !== "" || en !== "" || ua !== "" || task !== "") {
      dispatch(
        answersWord(answerTasks.length === 0 ? [formTasks] : answerTasks)
      ).then((data) => {
        !isLoadingAnswers && dispatch(openModalWellDone());
        console.log(data.payload.length > 0);
      });
    }
  };

  return (
    tasks.length > 0 && (
      <TrainingPageContainer>
        <div
          className="CicleContainer"
          style={{ visibility: findId ? "visible" : "hidden" }}
        >
          <Circle
            className="Circle"
            gapPosition="bottom"
            percent={findId && findId.progress}
            strokeWidth={8}
            trailWidth={8}
            strokeColor={{
              "0%": "#c9cdcc",
              "100%": "#85aa9f",
            }}
            strokeLinecap="round"
            gapDegree={0}
          />
          <div className="Percent">{findId && findId.progress}</div>
        </div>

        <form className="Form">
          <div className="FormContainer">
            <div id="ukrainian" className="InputContainer">
              <input
                className="Input"
                placeholder="Введіть переклад"
                value={formTasks.ua}
                onChange={(e) => handleInputChange(e, "ua")}
              />
              {tasks.length > wordItem && (
                <div className="LangueButton" onClick={handleSubmit}>
                  Next <Switch />
                </div>
              )}

              <div className="LangueName">
                <Ukraine /> Ukrainian
              </div>
            </div>
            <div className="InputContainer">
              <input
                className="Input"
                placeholder="Break in"
                value={formTasks.en}
                onChange={(e) => handleInputChange(e, "en")}
              />
              <div className="LangueName">
                <England /> English
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
