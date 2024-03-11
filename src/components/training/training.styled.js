import styled from "styled-components";
import ImgMobile from "../../img/blood-report-mobile.png";
import ImgDesctop from "../../img/blood-report-desctop.png";

export const TrainingContainer = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  display: grid;
  justify-content: center;

  @media only screen and (min-width: 1440px) {
    align-items: center;
  }

  .ContentContainer {
    margin-top: 30px;
    width: 343px;

    @media only screen and (min-width: 768px) {
      margin-top: 100px;
      width: 581px;
    }

    @media only screen and (min-width: 1440px) {
      width: 902px;
      height: 289px;
      display: grid;
      grid-template-areas:
        "t t i"
        "b b i";
      margin-top: 0px;
    }
  }

  .ImgContainer {
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1440px) {
      grid-area: i;
      margin-right: 32px;
    }
  }

  .Img {
    width: 189px;
    height: 203px;
    background-image: url(${ImgMobile});
    @media only screen and (min-width: 768px) {
      width: 250px;
      height: 290px;
      background-image: url(${ImgDesctop});
    }
  }

  .TextContainer {
    @media only screen and (min-width: 1440px) {
      grid-area: t;
    }
  }

  .Title {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Text {
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  .ButtonList {
    margin-top: 140px;

    @media only screen and (min-width: 768px) {
      margin-top: 60px;
      display: flex;
      gap: 8px;
    }

    @media only screen and (min-width: 1440px) {
      grid-area: b;
    }
  }

  .AddWordButton {
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

  .CancelButton {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: rgba(18, 20, 23, 0.5);
    padding: 16px;
    display: flex;
    justify-content: center;

    &:hover {
      color: #85aa9f;
    }

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
        color: #fcfcfc;
      }
    }
  }
`;
