import { useEffect } from "react";
import { DictionaryPageContainer } from "./dictionaryPage.styled";
import { ReactComponent as Plus } from "../../img/plus.svg";
import { ReactComponent as Switch } from "../../img/switch-horizontal-01 (1).svg";
import { useSelector } from "react-redux";

export default function DictionaryPage() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const CategoriesItem = [
    "Verb",
    "Participle",
    "Noun",
    "Adjective",
    "Pronoun",
    "Numerals",
    "Adverb",
    "Preposition",
    "Conjuction",
    "Phrasal verb",
    "Functional phrase",
  ];
  useEffect(() => {
    const customInput = document.querySelector(".custom-input");
    const input = customInput.querySelector("input");
    const dropdown = customInput.querySelector(".dropdown");
    const dropdownItems = dropdown.querySelectorAll("li");

    const handleClick = () => {
      dropdown.style.display = "grid";
    };

    const handleDropdownItemClick = (item) => {
      input.value = item.textContent;
      dropdown.style.display = "none";
    };

    const handleDocumentClick = (e) => {
      if (!customInput.contains(e.target)) {
        dropdown.style.display = "none";
      }
    };

    input.addEventListener("click", handleClick);

    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => handleDropdownItemClick(item));
    });

    document.addEventListener("click", handleDocumentClick);

    return () => {
      input.removeEventListener("click", handleClick);
      dropdownItems.forEach((item) =>
        item.removeEventListener("click", handleDropdownItemClick)
      );
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <DictionaryPageContainer>
      <form className="Form">
        <div className="SearchContainer">
          <input className="Input" type="text" placeholder="Find the word" />
        </div>
        <div className="custom-input">
          <input className="Input" type="text" placeholder="Categories" />
          <ul className="dropdown">
            {CategoriesItem.map((item) => (
              <li className="ListItem" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
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
        {/* {items.map(({ id, type, amount, currency }) => ( */}
        <tbody key="">
          <tr className="WordList">
            <td className="TableHeaderItem">type</td>
            <td className="TableHeaderItem">amount</td>
            <td className="TableHeaderItem">currency</td>
            <td className="TableHeaderItem">Progress</td>
          </tr>
        </tbody>
        {/* ))} */}
      </table>
    </DictionaryPageContainer>
  );
}
