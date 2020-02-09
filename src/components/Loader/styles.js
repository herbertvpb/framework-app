import styled from 'styled-components';

export const AppLoader = styled.div`
  display: flex;
  height: 100%;
  /* margin: 25px 20px; */
  padding-right: 15px;
  padding-top: 20%;

  .loader {
    border: 8px solid #e9ebee;
    border-top: 8px solid #6700da;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
