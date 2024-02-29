import { useEffect, useState } from "react";
import { DictionaryPageContainer } from "./dictionaryPage.styled";
import { ReactComponent as Plus } from "../../img/plus.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal-01 (1).svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllWord } from "../../redux/data/data-operation";
import { useDictionaryHook } from "components/hooks/dictyonaryHook";

export default function DictionaryPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    filters: "",
    statistics: "",
  });
  const [isVerb, setIsVerb] = useState(false);

  const { CategoriesItem } = useDictionaryHook();
  const data = useSelector((state) => state.data.words);

  useEffect(() => {
    dispatch(getAllWord(formData));
  }, [dispatch, formData]);
  console.log(data);

  const handleInputChange = (event, item) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("values=>", formData);
    console.log(isVerb);
  };

  const handleListItemClick = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      statistics: value,
    }));
    formData.statistics !== "Verb" ? setIsVerb(true) : setIsVerb(false);
  };

  return (
    <DictionaryPageContainer>
      <form className="Form">
        <div className="SearchContainer">
          <input
            id="filters"
            className="Input"
            type="text"
            placeholder="Find the word"
            name="filters"
            value={formData.filters}
            onChange={handleInputChange}
          />
        </div>
        <div className="custom-input">
          <input
            id="statistics"
            name="statistics"
            className="Input"
            type="text"
            placeholder="Categories"
            value={formData.statistics}
            onChange={handleInputChange}
          />
          <ul className="dropdown">
            {CategoriesItem.map((item) => (
              <li
                className="ListItem"
                key={item}
                onClick={() => handleListItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p style={{ display: isVerb ? "flex" : "none" }}>Radio button</p>
      </form>
      <div>
        <p className="CountWord">
          To study: <span className="NumberCountWord">20</span>
        </p>
        <ul className="ButtonList">
          <li className="ButtonItem">
            Add word <Plus />
          </li>
          <li className="ButtonItem">
            Train oneself <Switch />
          </li>
        </ul>
      </div>
      <table className="Table">
        <thead className="TableHeader">
          <tr className="TableHeaderList">
            <th className="TableHeaderItem">Word</th>
            <th className="TableHeaderItem">Translation</th>
            <th className="TableHeaderItem">Category</th>
            <th className="TableHeaderItem">Progress</th>
          </tr>
        </thead>
        {data.map(({ en, ua, category, isIrregular }, item) => (
          <tbody key={item}>
            <tr className="WordList">
              <td className="TableHeaderItem">{en}</td>
              <td className="TableHeaderItem">{ua}</td>
              <td className="TableHeaderItem">{category}</td>
              <td className="TableHeaderItem">{isIrregular}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </DictionaryPageContainer>
  );
}
