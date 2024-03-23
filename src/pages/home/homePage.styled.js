import styled from "styled-components";

export const HomePageContainer = styled.div`
  background: #85aa9f;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .LogoContainer {
    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;

    &:hover .LogoTitle {
      color: #121417;
    }

    &:hover {
      circle {
        fill: #121417;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .LogoTitle {
    font-size: 22px;
    line-height: 145%;
    color: #f8f8f8;
  }
`;
