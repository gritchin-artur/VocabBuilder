import styled from "styled-components";
import search from "../../img/search.svg";
import toggle from "../../img/toggle.svg";

export const DictionaryPageContainer = styled.div`
  background: #f8f8f8;
  height: 100vh;
  padding: 32px 16px;

  .Form {
    display: grid;
    gap: 8px;
  }

  .SearchContainer {
    position: relative;

    &::after {
      content: url(${search});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${toggle});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .Input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 12px 24px;
    width: 100%;
    height: 48px;
    box-sizing: border-box;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:focus {
      border-color: transparent;
      outline: none;
    }
  }

  .dropdown {
    position: absolute;
    margin-top: 5px;
    display: none;
    gap: 8px;

    border-radius: 15px;
    padding: 12px 24px;
    width: 343px;
    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
    background: #fff;
  }

  .ListItem {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border-radius: 6px;

    &:hover {
      background-color: #85aa9f;
    }
  }

  .CountWord {
    margin-top: 50px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(18, 20, 23, 0.5);

    align-items: center;
    display: flex;
    gap: 8px;
  }

  .NumberCountWord {
    font-weight: 500;
    font-size: 20px;
    color: #121417;
  }

  .ButtonList {
    margin-top: 16px;
    display: flex;
    gap: 16px;
  }

  .ButtonItem {
    display: flex;
    gap: 8px;
  }

  .Table {
    margin-top: 40px;
    border-collapse: collapse;
    width: 100%;

    border-radius: 8px;
    overflow: hidden;
  }

  .TableHeaderItem {
    padding: 16px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    text-align: left;

    font-weight: 500;
    font-size: 16px;
  }

  .TableHeader {
    background-color: #f2f2f2;
  }

  /* .WordList:nth-child(even) {
    background-color: #f2f2f2;
  } */

  .WordList:nth-child(odd) {
    background-color: #ffffff;
  }
`;
