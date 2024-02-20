import styled from "styled-components";
import Img from "../img/illustration.png";
import X from "../img/x-modal.svg";

export const BackdropModalStyle = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;

  z-index: 1200;

  .ButtonClose {
    background-image: url(${X});
  }

  .ModalDiv {
    background-color: #85aa9f;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: 9999;
    transition: right 0.5s ease-in-out;
  }

  .Img {
    width: 100%;
    height: 100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
  }
`;
