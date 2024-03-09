import styled from "styled-components";
import ImgMobile from "../../img/blood-report-mobile.png";

export const TrainingContainer = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;

  .Img {
    width: 189px;
    height: 203px;
    background-image: url(${ImgMobile});
  }

  .Title {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }

  .Text {
    font-weight: 400;
    font-size: 14px;
  }
`;
