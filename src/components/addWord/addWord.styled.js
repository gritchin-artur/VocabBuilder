import styled from "styled-components";

export const TrainingPageContainer = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding: 64px 32px;
  }

  .CicleContainer {
    position: relative;
    display: flex;
    justify-content: end;
  }
  .Circle {
    width: 44px;
    height: 44px;

    @media only screen and (min-width: 768px) {
      width: 58px;
      height: 58px;
    }
  }
  .Percent {
    position: absolute;
    right: 13px;
    top: 10px;
    width: 20px;
    height: 20px;
    text-align: center;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;

    @media only screen and (min-width: 768px) {
      right: 20px;
      top: 16px;
    }
  }

  .Form {
    margin-top: 16px;
  }

  .FormContainer {
    display: grid;
    @media only screen and (min-width: 768px) {
      border-radius: 15px;
      padding: 18px;
      background: #fff;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .InputContainer {
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    padding: 22px;
    width: 100%;
    height: 195px;
    background: #fcfcfc;
    display: grid;
    grid-template-areas:
      "i i i i"
      "b b n n";

    @media only screen and (min-width: 768px) {
      height: 282px;
      grid-template-areas:
        "i i n n "
        "b b _ _ ";
    }

    @media only screen and (min-width: 1440px) {
      height: 302px;
    }
  }

  .InputContainer[id="ukrainian"] {
    border-bottom: 1px solid #dbdbdb;
    @media only screen and (min-width: 1440px) {
      border-bottom: none;
      border-right: 1px solid #dbdbdb;
    }
  }

  input {
    grid-area: i;
    border: none;
    background: #fcfcfc;
    width: 100%;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    margin-bottom: auto;

    &:focus {
      outline: none;
    }
  }

  .LangueButton {
    cursor: pointer;
    grid-area: b;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;

    background: none;
    border: none;

    &:hover {
      color: #85aa9f;
    }
  }

  .LangueName {
    grid-area: n;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    margin-left: auto;

    @media only screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: auto;
    }
  }

  .ButtonList {
    display: grid;
    margin-top: 150px;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 8px;
      margin-top: 50px;
      justify-content: start;
    }
  }

  .SaveButton {
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 16px;
    width: 343px;
    height: 56px;
    background: #85aa9f;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    text-align: center;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }

    @media only screen and (min-width: 768px) {
      width: 203px;
      padding: 14px;
      font-size: 18px;
      line-height: 156%;
    }
  }

  .CanselButton {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: rgba(18, 20, 23, 0.5);
    padding: 16px;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      box-sizing: border-box;
      border: 1px solid #85aa9f;
      border-radius: 30px;
      padding: 14px;
      width: 203px;
      height: 56px;

      font-size: 18px;
      line-height: 156%;
      color: #85aa9f;

      &:hover {
        background: #85aa9f;
        color: #f8f8f8;
      }
    }
  }
`;
