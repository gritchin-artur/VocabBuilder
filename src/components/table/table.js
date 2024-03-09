import { useDispatch } from "react-redux";
import { ReactComponent as Ukraine } from "../../img/ukraine.svg";
import { ReactComponent as England } from "../../img/united kingdom.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal.svg";
import { Circle } from "rc-progress";
import { openModalClickWord } from "../../redux/modals/modal-slice";
import { TableList } from "./table.styled";
import { addWord } from "../../redux/data/data-operation";

export function Table({ data }) {
  const dispatch = useDispatch();

  // const [wordPercent, setWordPercent] = useState(70);
  // const [percent, setPercent] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPercent((prevPercent) => {
  //       const newPercent = prevPercent + 1;
  //       return newPercent > wordPercent ? wordPercent : newPercent;
  //     });
  //   }, 20);

  //   return () => clearInterval(interval);
  // }, [wordPercent]);

  const handleClickWord = (event, word) => {
    const { clientX, clientY } = event;
    dispatch(
      openModalClickWord({
        x: clientX,
        y: clientY,
        wordId: word,
      })
    );
  };
  return (
    <TableList>
      <thead className="TableHeader">
        <tr className="TableHeaderList">
          <th className="TableHeaderItem">
            <div className="TableImagContainer">
              Word <England className="IconCountry" />
            </div>
          </th>
          <th className="TableHeaderItem">
            <div className="TableImagContainer">
              Translation <Ukraine className="IconCountry" />
            </div>
          </th>
          <th className="TableHeaderItem">Category</th>
          <th className="TableHeaderItem">
            {data.results && data.results[0].progress >= 0 ? "Progress" : ""}
          </th>
        </tr>
      </thead>
      {data.results &&
        data.results.map((word, item) => (
          <tbody
            className={data.results[0].progress >= 0 ? "WordOfTable" : ""}
            key={item}
            style={{ cursor: data.results[0].progress >= 0 ? "pointer" : "" }}
          >
            <tr
              className="WordList"
              onClick={(event) => {
                word.progress >= 0 && handleClickWord(event, word);
              }}
            >
              <td className="TableHeaderItem">{word.en}</td>
              <td className="TableHeaderItem">{word.ua}</td>
              <td className="TableHeaderItem">{word.category}</td>
              <td className="TableHeaderItem">
                {word.progress >= 0 ? (
                  <div className="PercentContainer">
                    {word.progress}%
                    <Circle
                      className="Circle"
                      gapPosition="bottom"
                      percent={word.progress}
                      strokeWidth={15}
                      trailWidth={15}
                      strokeColor="#00FF00"
                      strokeLinecap="round"
                      gapDegree={0}
                    />
                  </div>
                ) : (
                  <div
                    className="AddDictionaryContainer"
                    onClick={() => dispatch(addWord(word._id))}
                  >
                    <span className="AddToDictionaryText">
                      Add to dictionary
                    </span>
                    <Switch />
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        ))}
    </TableList>
  );
}
