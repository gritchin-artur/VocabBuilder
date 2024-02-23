import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  display: grid;
  justify-content: center;
  .ImgContainer {
    display: grid;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  .RegisterImg {
  }

  .FormContainer {
    padding: 15px 30px;
    border-radius: 25px 25px 0 0;
    background: rgba(133, 170, 159, 0.1);
    height: 100vh;

    @media only screen and (min-width: 768px) {
      padding: 40px 60px;
      border-radius: 30px;
      max-width: 627px;
      max-height: 591px;
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
    padding: 16px 139px;
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

  .NavLogIn {
    justify-content: center;
    display: flex;
    margin-top: 32px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: rgba(18, 20, 23, 0.5);
  }

  .SkilsList {
    display: none;

    @media only screen and (min-width: 768px) {
      margin-top: 120px;
      display: flex;
      justify-content: center;

      & li {
        display: inline-block;
        margin-right: 15px;
      }

      & li:not(:last-child)::after {
        content: "·";
        margin-left: 15px;
      }
    }
  }

  .Skil {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    text-align: center;
    color: rgba(18, 20, 23, 0.8);
  }
`;
