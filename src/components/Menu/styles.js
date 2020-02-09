import styled from 'styled-components';

export const AppMenu = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  a.default {
    color: #333333;
    font-size: 26px;
    text-decoration: none;
  }

  a.selected {
    color: #3a0674;
    font-weight: bold;
    font-size: 26px;
    text-decoration: none;
  }

  a:hover {
    color: #3a0674;
  }
`;
