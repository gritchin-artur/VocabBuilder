import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeModalMobile } from "../redux/modals/modal-slice";
import { BackdropModalStyle } from "./mobileModal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function MobileModal() {
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );

  const handleClickClose = useCallback(() => {
    dispatch(closeModalMobile());
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.cssText = `overflow: hidden; `;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.cssText = `overflow: auto; `;
    };
  }, [isMobileModalOpen, handleClickClose, dispatch]);
  return createPortal(
    isMobileModalOpen && (
      <BackdropModalStyle onClick={handleBackdropClick}>
        <div className="ModalDiv">
          <div>
            <button className="ButtonClose" onClick={handleClickClose} />
          </div>
          <ul>
            <li>
              <NavLink to="/dictionary">Dictionary</NavLink>
            </li>
            <li>
              <NavLink to="/recommend">Recommend</NavLink>
            </li>
            <li>
              <NavLink to="/training">Training</NavLink>
            </li>
          </ul>
          <div className="Img" />
        </div>
      </BackdropModalStyle>
    ),
    modalRoot
  );
}
