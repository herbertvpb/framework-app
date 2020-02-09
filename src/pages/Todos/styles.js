import styled from 'styled-components';

export const TodoList = styled.div`
  display: flex;
  height: 90%;
  width: 80%;
  flex-direction: column;
  margin: 25px 20px;
  padding-top: 25px;
  padding-right: 15px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #9073c7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .todo {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }

    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    input:checked ~ .checkmark {
      background-color: #6700da;
    }

    input:checked ~ .checkmark:after {
      display: block;
    }

    .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    p {
      color: #47525e;
      font-size: 18px;
      margin-bottom: 15px;
    }

    p::first-letter {
      text-transform: uppercase;
    }
  }
`;
