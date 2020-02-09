import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #E9EBEE;
    -webkit-font-smoothing: antialiased !important;
  }

  .container {
    display: flex;
    justify-content: center;
    height: 88vh;
    font-family: Arial, Helvetica, sans-serif;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 448px;
    width: 60%;
    margin: 15px;
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff;

    box-shadow: 0px 0px 6px 2px rgba(204, 202, 204, 1);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(204, 202, 204, 1);
    -moz-box-shadow: 0px 0px 6px 2px rgba(204, 202, 204, 1);

    .menu {
      width: 80%;
      height: 64px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      h1 {
        font-family: Arial, Helvetica, sans-serif;
        color: #333333;
        font-size: 26px;
      }

      h1:hover {
        color: #3a0674;
      }
    }
  }
`;
