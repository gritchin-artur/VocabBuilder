import styled from "styled-components";
import vector from "../../img/Vector-min.jpg";
import mobileImg from "../../img/registration-mobile.png";
import desctopImg from "../../img/registration-desctop.png";

export const LogInPageContainer = styled.div`
  display: grid;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    background-image: url(${vector});
    background-size: cover;
    height: 100vh;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 50px;
    display: grid;
    grid-template-areas:
      "f i"
      "f l"
      "f l"
      "f l";
  }

  .ImgContainer {
    order: 1;
    display: grid;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      display: none;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .RegisterImg {
    background-image: url(${mobileImg});
    width: 247px;
    height: 191px;

    @media only screen and (min-width: 1440px) {
      width: 498px;
      height: 475px;
      grid-area: i;
      background-image: url(${desctopImg});
    }
  }

  .FormContainer {
    margin-top: 40px;
    order: 3;
    padding: 15px 30px;
    border-radius: 25px 25px 0 0;
    background: rgba(133, 170, 159, 0.1);
    height: 100vh;

    @media only screen and (min-width: 768px) {
      margin-top: 150px;
      padding: 40px 60px;
      border-radius: 30px;
      max-width: 627px;
      max-height: 591px;
    }

    @media only screen and (min-width: 1440px) {
      grid-area: f;
      margin-right: 70px;
    }
  }

  .Title {
    font-weight: 600;
    font-size: 30px;
    line-height: 107%;
    letter-spacing: -0.02em;
    color: #121417;

    @media only screen and (min-width: 768px) {
      font-size: 53px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.8);
    margin-top: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 27px;
      margin-top: 20px;
    }
  }

  .Form {
    margin-top: 16px;
    display: grid;
    gap: 14px;

    @media only screen and (min-width: 768px) {
      margin-top: 36px;
      gap: 18px;
    }
  }

  .Input {
    box-sizing: border-box;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 16px 18px;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .ButtonSubmit {
    margin-top: 16px;
    border-radius: 30px;
    padding: 16px 18px;
    background: #85aa9f;
    border: none;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      margin-top: 36px;
    }
  }

  .SkilsList {
    margin-top: 16px;
    order: 2;
    display: flex;
    justify-content: center;
    & li {
      display: inline-block;
      margin-right: 7px;
    }

    & li:not(:last-child)::after {
      content: "·";
      margin-left: 7px;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 0px;
      order: 3;
      & li {
        margin-right: 15px;
      }

      & li:not(:last-child)::after {
        margin-left: 15px;
      }
    }

    @media only screen and (min-width: 1440px) {
      grid-area: l;
    }
  }

  .Skil {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: rgba(18, 20, 23, 0.8);

    @media only screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 150%;
    }
  }
`;