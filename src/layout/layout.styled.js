import styled from "styled-components";

export const MainContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media only screen and (min-width: 768px) {
  }

  .NavigationContainer {
    display: none;

    @media only screen and (min-width: 1440px) {
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
    position: relative;
    z-index: 1;

    &:hover {
      color: #85aa9f;
    }

    &.active {
      color: #f8f8f8;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.active::after {
      content: "";
      left: -20px;
      bottom: -12px;
      z-index: -1;
      height: 15px;
      width: 100%;
      position: absolute;
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #85aa9f;
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

    &:hover {
      color: #85aa9f;
    }

    &:hover {
      path {
        stroke: #85aa9f;
        fill: #85aa9f;
      }
      circle {
        stroke: #85aa9f;
        fill: none;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .UserContainer {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .UserName {
    font-weight: 500;
    font-size: 20px;
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
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      line {
        stroke: #85aa9f;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media only screen and (min-width: 1440px) {
      display: none;
    }
  }

  .ButtonLogOut {
    border: 1px solid #85aa9f;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #85aa9f;

    position: fixed;
    bottom: 20px;
    right: 20px;

    font-weight: 700;
    font-size: 14px;
    line-height: 156%;
    color: #fcfcfc;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }
  }
`;
