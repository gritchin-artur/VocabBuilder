import styled from "styled-components";
import toggle from "../../img/toggle.svg";

export const ContainerAddWordModal = styled.div`
  position: relative;
  border-radius: 15px;
  width: 342px;
  height: 621px;

  background: #85aa9f;
  padding: 18px;

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;
  }

  .TextContainer {
    margin-top: 30px;
  }

  .Title {
    font-weight: 600;
    font-size: 30px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #f8f8f8;
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    margin-top: 20px;
  }

  .Form {
    margin-top: 20px;
    position: relative;
    display: grid;
    gap: 15px;
  }

  .Input {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 24px;
    width: 100%;
    height: 48px;

    background: none;
    box-sizing: border-box;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    &:focus {
      outline: none;
    }
  }

  .custom-inputAdd {
    position: relative;

    &::after {
      content: url(${toggle});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-inputAdd::after {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(330deg)
      brightness(91%) contrast(92%);
  }

  .dropdownAdd {
    z-index: 1000;
    position: absolute;
    margin-top: 5px;
    display: none;
    gap: 8px;

    border-radius: 15px;
    padding: 12px 24px;
    width: 343px;
    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
    background: #fff;
  }

  .ListItem {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border-radius: 6px;

    &:hover {
      background-color: #85aa9f;
    }
  }

  .RadioButtonList {
    position: absolute;
    top: 60px;
    display: flex;
    gap: 34px;
    left: 14px;

    /* @media only screen and (min-width: 768px) {
      position: static;
      margin-left: 20px;
    } */
  }

  .RadioButtonItem {
    position: relative;
    display: flex;
    gap: 8px;

    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #fcfcfc;
    text-align: center;
    align-items: center;
  }

  .RadioButton {
    height: 12px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #85aa9f;
      border: 3px solid #fcfcfc;
    }

    &:checked:before {
      border-color: #fcfcfc;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fcfcfc;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .UkrainianContainer[id="ukrainian"] {
    margin-top: 50px;
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: grid;
    gap: 8px;
  }
  .InputImagContainer {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;
  }

  .ButtonList {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .ButtonAdd {
    border-radius: 30px;
    padding: 12px 63px;
    width: 169px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .ButtonCancel {
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 155px;
    height: 48px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;
  }
`;
