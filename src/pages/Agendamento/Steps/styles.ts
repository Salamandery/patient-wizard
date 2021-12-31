import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const DataContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 34%;
  right: 3%;
  min-width: 15%;
  margin: 0;
  padding: 20px;
  border: 1px solid #b3b3b3;

  > p {
    font-weight: 500;
    margin-top: 0;
  }

  > span {
    font-size: 14px;
    font-style: italic;
  }

  > button {
    border: 0;
    font-weight: bold;
    background: #f2f2f2;
    padding: 10px 5px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .2s ease;

    &:hover {
      background: ${shade(0.05, '#f2f2f2')};

      > svg {
        color: ${shade(0.05, '#2F94D2')};;
      }
    }

    > svg {
      color: #2F94D2;
      margin-left: 10px;
    }
  }
`;

export const ResumoContainer = styled.div`
  width: 40%;
  min-height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
