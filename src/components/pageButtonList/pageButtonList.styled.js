import styled from "styled-components";

export const PageList = styled.ul`
  /* flex-wrap: wrap; */
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 10px;

  .PageButton {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 8px;
    min-width: 32px;
    height: 32px;
    cursor: pointer;

    justify-content: center;
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 13px;

    &:hover {
      background: #85aa9f;
      color: #fff;
    }
  }
`;
