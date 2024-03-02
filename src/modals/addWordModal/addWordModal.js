import { ContainerAddWordModal } from "./addWordModal.styled";
import { ReactComponent as ButtonClose } from "../../img/x-modal.svg";

export function AddWordModal({ handleClickClose }) {
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
        <div className="custom-input">
          <input
            id="statistics"
            name="statistics"
            className="Input"
            type="text"
            placeholder="Categories"
            // value={formData.statistics}
            // onChange={handleInputChange}
          />
          <ul className="dropdown">
            {/* {categories &&
                categories.map((item) => ( */}
            <li
              className="ListItem"
              // key={item}
              // onClick={() => handleListItemClick(item)}
            >
              {/* {item} */}
            </li>
            {/* ))} */}
          </ul>
        </div>
        <ul
          className="RadioButtonList"
          // style={{ display: isVerb ? "flex" : "none" }}
        >
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="regular"
              name="regular"
              type="radio"
              // onChange={() => handleIsIrregularClick(true)}
              // value={formData.isIrregular}
              // checked={formData.isIrregular === true}
            />
            Regular
          </li>
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="reason"
              name="reason"
              type="radio"
              // onChange={() => handleIsIrregularClick(false)}
              // value={formData.isIrregular}
              // checked={formData.isIrregular === false}
            />
            Irregular
          </li>
        </ul>

        <div className="UkrainianContainer">
          <input
            id="ukrainian"
            className="Input"
            type="text"
            placeholder="Слово Українською"
            name="ukrainian"
            // value={formData.filters}
            // onChange={handleInputChange}
          />
        </div>
      </form>
    </ContainerAddWordModal>
  );
}
