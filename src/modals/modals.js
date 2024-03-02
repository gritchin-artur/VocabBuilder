import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModalMobile } from "../redux/modals/modal-slice";
import MobileModal from "./mobileModal/mobileModal";
import { BackdropStyle } from "./modals.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modals() {
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
      <BackdropStyle onClick={handleBackdropClick}>
        {isMobileModalOpen && (
          <MobileModal handleClickClose={handleClickClose} />
        )}
      </BackdropStyle>
    ),
    modalRoot
  );
}
