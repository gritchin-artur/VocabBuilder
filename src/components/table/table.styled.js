import styled from "styled-components";

export const TableList = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  border-radius: 8px;
  overflow: hidden;

  .IconCountry {
    display: none;

    @media only screen and (min-width: 768px) {
      display: inline-flex;
    }
  }

  .TableHeaderItem {
    padding: 16px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    text-align: left;

    font-weight: 500;
    font-size: 18px;

    overflow-wrap: break-word;

    @media only screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }

  .WordOfTable {
    &:hover,
    &:focus {
      color: #85aa9f;
    }
  }

  .PercentContainer {
    display: flex;
    gap: 10px;
    align-items: center;

    width: 90px;
    display: flex;
    justify-content: end;
  }

  .AddDictionaryContainer {
    cursor: pointer;
    gap: 10px;
    align-items: center;

    &:hover,
    &:focus {
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      display: grid;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .TableImagContainer {
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }
  }

  .TableHeader {
    background-color: #f2f2f2;
  }

  /* .WordList:nth-child(even) {
    background-color: #f2f2f2;
  } */

  /* .WordList {
    cursor: pointer;
  } */
  .WordList:nth-child(odd) {
    background-color: #ffffff;
  }

  .Circle {
    width: 26px;
    height: 26px;
  }

  .AddToDictionaryText {
    display: none;
    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
`;
