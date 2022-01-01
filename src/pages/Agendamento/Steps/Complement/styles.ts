import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin-bottom: 50px;
`;

export const DateTimeContainer = styled.div`
  width: 90%;

  > span {
    width: 100%;
    margin-left: 10px;
    font-weight: 500;
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const HourContainer = styled.div`
  padding: 7px 10px;
  margin: 0 5px;

  > button {
    min-width: 90px;
    margin: 2px;
    border: 0;
    border-radius: 4px;
    padding: 5px 20px;
    background: #6BE49F;
    font-size: 16px;
    font-weight: 500;
    transition: background-color .2s ease;

    &:hover {
      background: ${shade(0.05, '#6BE49F')};
    }
  }
`;