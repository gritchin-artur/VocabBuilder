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

  .ModalDiv {
    background-color: #85aa9f;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: 9999;
    transition: right 0.5s ease-in-out;
    padding: 16px;
  }

  .HeaderOfModal {
    display: flex;
    justify-content: space-between;
  }

  .ButtonClose {
    cursor: pointer;
    background-image: url(${X});
  }

  .NavList {
    display: grid;
    gap: 28px;
    margin-top: 150px;
  }

  .NavElement {
    text-decoration: none;

    font-weight: 500;
    font-size: 14px;
    color: #f8f8f8;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &.active {
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #f8f8f8;
      color: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .Img {
    width: 100%;
    height: 100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
    margin-top: 150px;

    background-position: center;
    height: 700px;
  }
`;
