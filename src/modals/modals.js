import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalAddWord,
  closeModalClickWord,
  closeModalMobile,
} from "../redux/modals/modal-slice";
import MobileModal from "./mobileModal/mobileModal";
import { BackdropClickWord, BackdropStyle } from "./modals.styled";
import { AddWordModal } from "./addWordModal/addWordModal";
import { ClickWord } from "./clickWord/clickWord";

const modalRoot = document.querySelector("#modal-root");

export default function Modals() {
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const isModalOpenAddWord = useSelector(
    (state) => state.modal.isModalOpenAddWord
  );
  const isModalOpenClickWord = useSelector(
    (state) => state.modal.isModalOpenClickWord
  );

  const handleClickClose = useCallback(() => {
    dispatch(closeModalMobile());
    dispatch(closeModalAddWord());
    dispatch(closeModalClickWord());
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
  }, [
    isMobileModalOpen,
    isModalOpenAddWord,
    isModalOpenClickWord,
    handleClickClose,
    dispatch,
  ]);
  return createPortal(
    <>
      {(isMobileModalOpen || isModalOpenAddWord) && (
        <BackdropStyle onClick={handleBackdropClick}>
          {isMobileModalOpen && (
            <MobileModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenAddWord && (
            <AddWordModal handleClickClose={handleClickClose} />
          )}
        </BackdropStyle>
      )}
      {isModalOpenClickWord && (
        <BackdropClickWord onClick={handleBackdropClick}>
          <ClickWord handleClickClose={handleClickClose} />
        </BackdropClickWord>
      )}
    </>,
    modalRoot
  );
}
