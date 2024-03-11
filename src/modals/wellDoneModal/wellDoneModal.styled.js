import styled from "styled-components";
import bookMobile from "../../img/open-orange-book-mobile-min.png";
// import bookDesctop from "../../img/open-orange-book-desctop-min.png";

export const WellDoneContainer = styled.div`
  border-radius: 15px;
  width: 342px;
  height: 458px;
  padding: 18px;

  background: #85aa9f;
  position: relative;

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;
  }

  .Title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #fcfcfc;
  }

  .ContentContainer {
    display: flex;
    gap: 30px;
    justify-content: start;
  }

  .TitleCorrectAnswer,
  .TitleMistakes {
    font-weight: 400;
    font-size: 14px;
    color: rgba(252, 252, 252, 0.5);
  }

  .Img {
    width: 152px;
    height: 121px;
    background-image: url(${bookMobile});
  }
`;
