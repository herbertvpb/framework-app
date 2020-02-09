import styled from 'styled-components';

export const AlbumList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(250px, auto);
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

  .album {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .image {
      position: relative;
    }

    .icon {
      position: absolute;
      top: 100px;
      left: 100px;
    }

    h1 {
      color: #47525e;
      font-size: 18px;
      margin: 15px;
    }

    h1::first-letter {
      text-transform: uppercase;
    }
  }
`;
