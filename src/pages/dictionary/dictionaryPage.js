import { useEffect, useRef, useState } from "react";
import { DictionaryPageContainer } from "./dictionaryPage.styled";
import { ReactComponent as Plus } from "../../img/plus.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal-01 (1).svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllWord } from "../../redux/data/data-operation";
import { useDictionaryHook } from "components/hooks/dictyonaryHook";
import { debounce } from "lodash";

export default function DictionaryPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    filters: "",
    statistics: "",
    isIrregular: undefined,
  });
  const [isVerb, setIsVerb] = useState(false);

  const { CategoriesItem } = useDictionaryHook();
  const data = useSelector((state) => state.data.words);
  const categories = useSelector((state) => state.data.categories);
  const token = useSelector((state) => state.auth.token);

  const delayedDispatchRef = useRef(
    debounce((formData) => {
      dispatch(getAllWord(formData));
    }, 300)
  );

  useEffect(() => {
    delayedDispatchRef.current(formData);
    dispatch(getAllCategories());
  }, [dispatch, formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
    console.log("values=>", formData, isVerb);
    console.log(token);
  };

  const handleListItemClick = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      statistics: value,
    }));
    value === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handleIsIrregularClick = (boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      isIrregular: boolean,
    }));
  };

  const pages = Array.from(
    { length: data.totalPages },
    (_, index) => index + 1
  );

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
            {categories &&
              categories.map((item) => (
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
        <ul
          className="RadioButtonList"
          style={{ display: isVerb ? "flex" : "none" }}
        >
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="regular"
              name="regular"
              type="radio"
              onChange={() => handleIsIrregularClick(true)}
              value={formData.isIrregular}
              checked={formData.isIrregular === true}
            />
            Regular
          </li>
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="Career and business"
              name="reason"
              type="radio"
              onChange={() => handleIsIrregularClick(false)}
              value={formData.isIrregular}
              checked={formData.isIrregular === false}
            />
            Irregular
          </li>
        </ul>
      </form>
      <div>
        <p className="CountWord">
          To study:{" "}
          <span className="NumberCountWord">{data.results.length}</span>
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
        {data.results.map(({ en, ua, category, isIrregular }, item) => (
          <tbody key={item}>
            <tr className="WordList">
              <td className="TableHeaderItem">{en}</td>
              <td className="TableHeaderItem">{ua}</td>
              <td className="TableHeaderItem">{category}</td>
              <td className="TableHeaderItem">
                {isIrregular ? "Регулярний" : "Нерегулярний"}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {data.totalPages > 1 && (
        <ul className="PageList">
          {pages.map((page, item) => (
            <li className="PageButton" key={item}>
              {page}
            </li>
          ))}
        </ul>
      )}
    </DictionaryPageContainer>
  );
}
