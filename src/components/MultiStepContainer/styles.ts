import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface StepLabelProps {
  active: boolean;
}

interface StepLineProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StepLine = styled.hr<StepLineProps>`
  z-index: -1;
  position: absolute;
  top: 1.2em;
  width: 100%;
  height: .1em;
  transition: background-color 1.5s;

  ${props => props.active ? css`
    background: #2F94D2;
  ` : css`
    background: #b3b3b3;
  `};
`;

export const StepLabel = styled.div<StepLabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  font-weight: bold;
  padding: 10px;
  color: #fff;
  transition: background-color .9s;

  ${props => props.active ? css`
    background: #2F94D2;
  ` : css`
    background: #b3b3b3;
  `};

  &:hover {
    ${props => props.active ? css`
    background: ${shade(0.2, '#2F94D2')};
  ` : css`
    background: ${shade(0.2, '#b3b3b3')};
  `};
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px 0;
`;

export const StepGroup = styled.div`
  z-index: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    flex-grow: 1;
  }
`;

export const StepContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const StepFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 8px 14px;
  border: 0;
  border-radius: 5px;
  background: #2F94D2;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  transition: background-color 0.4s ease;

  &:hover {
    background: ${shade(0.2, '#2F94D2')};
  }
`;