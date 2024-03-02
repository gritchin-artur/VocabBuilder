import { ReactComponent as First } from "../../img/page-button/First.svg";
import { ReactComponent as Next } from "../../img/page-button/Next.svg";
import { ReactComponent as Last } from "../../img/page-button/Last.svg";
import { ReactComponent as Prev } from "../../img/page-button/Prev.svg";
import { PageList } from "./pageButtonList.styled";

export function PageButtonList({ data, formData, setFormData }) {
  const pages = Array.from(
    { length: data.totalPages },
    (_, index) => index + 1
  );

  const handleClickPage = (page) => {
    setFormData((prevState) => ({ ...prevState, page: page }));
  };

  return (
    <PageList>
      <li className="PageButton" onClick={() => handleClickPage(1)}>
        <First />
      </li>
      <li
        className="PageButton"
        onClick={() =>
          1 < formData.page ? handleClickPage(formData.page - 1) : null
        }
      >
        <Prev />
      </li>
      {pages.map((page, item) => (
        <li
          style={{
            background: page === formData.page ? "#85aa9f" : "none",
            color: page === formData.page ? "#fcfcfc" : "#121417",
          }}
          className="PageButton"
          key={item}
          onClick={() => handleClickPage(page)}
          value={formData.page}
        >
          {page}
        </li>
      ))}
      <li
        className="PageButton"
        onClick={() =>
          data.totalPages > formData.page
            ? handleClickPage(formData.page + 1)
            : null
        }
      >
        <Next />
      </li>
      <li
        className="PageButton"
        onClick={() => handleClickPage(data.totalPages)}
      >
        <Last />
      </li>
    </PageList>
  );
}
