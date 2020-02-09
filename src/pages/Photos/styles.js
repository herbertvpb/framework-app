import styled from 'styled-components';

export const PhotoList = styled.div`
  width: 90%;
  height: 90%;
  margin: 25px 20px;
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

  .header {
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #47525e;
      font-size: 22px;
      margin: 15px;
    }

    a {
      color: #47525e;
      font-size: 18px;
      margin: 15px;
      text-decoration: none;
    }

    a:hover {
      font-weight: bold;
    }

    h1::first-letter {
      text-transform: uppercase;
    }
  }
`;
