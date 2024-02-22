import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media only screen and (min-width: 768px) {
  }

  .NavigationContainer {
    display: none;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 28px;
    }
  }

  .NavElement {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #121417;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &.active {
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #85aa9f;
      color: #f8f8f8;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .RightSideHeader {
    display: flex;
    align-items: center;
  }

  .LogoContainer {
    display: flex;
    gap: 16px;
    align-items: center;

    text-decoration: none;
    color: inherit;
  }

  .UserContainer {
    display: flex;
    align-items: center;
  }

  .UserImag {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    width: 36px;
    height: 36px;
    background: #85aa9f;
  }

  .ButtonBurger {
    margin-left: 8px;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;
