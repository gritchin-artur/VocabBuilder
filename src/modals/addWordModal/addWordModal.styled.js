import styled from "styled-components";

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
    font-size: 24px;
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
`;
