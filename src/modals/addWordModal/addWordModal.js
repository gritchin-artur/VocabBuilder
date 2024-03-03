import { ContainerAddWordModal } from "./addWordModal.styled";
import { ReactComponent as ButtonClose } from "../../img/x-modal.svg";
import { ReactComponent as Ukraine } from "../../img/ukraine.svg";
import { ReactComponent as England } from "../../img/united kingdom.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createWord } from "../../redux/data/data-operation";

export function AddWordModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    en: "",
    ua: "",
    category: "",
    isIrregular: undefined,
  });
  const [isVerb, setIsVerb] = useState(false);
  const categories = useSelector((state) => state.data.categories);

  useEffect(() => {
    const customInput = document.querySelector(".custom-inputAdd");
    const input = customInput.querySelector("input");
    const dropdown = customInput.querySelector(".dropdownAdd");
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleListItemClick = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      category: value,
    }));
    value === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handleIsIrregularClick = (boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      isIrregular: boolean,
    }));
  };

  const handleClickAdd = () => {
    dispatch(createWord(formData));
    console.log(formData);
    handleClickClose();
  };

  return (
    <ContainerAddWordModal>
      <ButtonClose className="ButtonClose" onClick={handleClickClose} />
      <div className="TextContainer">
        <h2 className="Title">Add word</h2>
        <p className="Text">
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
      </div>
      <form className="Form">
        <div className="custom-inputAdd">
          <input
            id="statistics"
            name="category"
            className="Input"
            type="text"
            placeholder="Categories"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
          <ul className="dropdownAdd">
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
              id="reason"
              name="reason"
              type="radio"
              onChange={() => handleIsIrregularClick(false)}
              value={formData.isIrregular}
              checked={formData.isIrregular === false}
            />
            Irregular
          </li>
        </ul>

        <div className="UkrainianContainer" id="ukrainian">
          <div className="InputImagContainer">
            <Ukraine className="IconCountry" /> Ukrainian
          </div>
          <input
            id="ukrainian"
            className="Input"
            type="text"
            placeholder="Слово Українською"
            name="ua"
            value={formData.ua}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="EnglishContainer">
          <div className="InputImagContainer">
            <England className="IconCountry" /> English
          </div>
          <input
            id="english"
            className="Input"
            type="text"
            placeholder="Word in English"
            name="en"
            value={formData.en}
            onChange={handleInputChange}
            required
          />
        </div>

        <ul className="ButtonList">
          <li className="ButtonAdd" onClick={handleClickAdd}>
            Add
          </li>
          <li className="ButtonCancel" onClick={handleClickClose}>
            Cancel
          </li>
        </ul>
      </form>
    </ContainerAddWordModal>
  );
}
