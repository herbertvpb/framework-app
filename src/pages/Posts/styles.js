import styled from 'styled-components';

export const PostList = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
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

  .post {
    margin-bottom: 15px;
    border-bottom: 1px solid #969faa;

    h1 {
      color: #47525e;
      font-size: 18px;
      margin-bottom: 15px;
    }

    h1::first-letter {
      text-transform: uppercase;
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
