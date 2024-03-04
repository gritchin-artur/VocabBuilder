import { useDispatch, useSelector } from "react-redux";
import { ClickWordContainer } from "./clickWord.styled";
import { ReactComponent as Pencil } from "../../img/pencil-green.svg";
import { ReactComponent as Trash } from "../../img/trash-green.svg";
import { deleteWord } from "../../redux/data/data-operation";

export function ClickWord({ handleClickClose }) {
  const dispatch = useDispatch();
  const clickWordCoordinates = useSelector(
    (state) => state.modal.clickWordCoordinates
  );
  const clickWordId = useSelector((state) => state.modal.clickWordId);
  console.log(clickWordId);
  return (
    <ClickWordContainer x={clickWordCoordinates.x} y={clickWordCoordinates.y}>
      <li
        className="Element"
        //   onClick={dispatch()}
      >
        <Pencil />
        Edit
      </li>
      <li className="Element" onClick={() => dispatch(deleteWord(clickWordId))}>
        <Trash />
        Delete
      </li>
    </ClickWordContainer>
  );
}
