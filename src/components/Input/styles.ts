import { shade } from 'polished';
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isBorderAppear?: boolean;
  isBorderMovingLeft?: boolean;
  isBorderMovingRight?: boolean;
  isBorderAnimationPingPong?: boolean;
  isValueCLicked?: boolean;
  isInputClicked?: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #000;
  background: #E5E5E5;
  border-radius: 2px;
  position: relative;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  ${props => props.isBorderAppear ? (
    css`
      border-bottom: 1px solid;
      border-color: transparent;
      transition: border-color .4s ease-in-out;
    `
  ) : (
    css`
      &:after, &:before {
        content: '';
        display: block;
        border-bottom: solid 1px #000;
        transform: scaleX(0);

        ${!props.isErrored && css`
          transition: transform .4s ease-in-out;
        `}
        ${props.isBorderMovingLeft && css`
          transform-origin: 0% 50%;
        `}
        ${props.isBorderMovingRight && css`
          transform-origin: 100% 50%;
        `}
      }
    `
  )}

  ${props => !props.isBorderAppear &&
  css`
    &:before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  `}

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      ${props.isBorderAppear &&
      css`
        border-bottom: 1px solid;
        border-color: #000;
      `}

      ${!props.isBorderAppear &&
        css`
          &:after, &:before {
            ${!props.isErrored && css`
              transform: scaleX(1);
            `}
            ${props.isBorderAnimationPingPong ? (
              css`
                ${props.isBorderMovingLeft && css`
                  transform-origin: 0% 50%;
                `}
                ${props.isBorderMovingRight && css`
                  transform-origin: 100% 50%;
                `}
              `
            ) : (
              css`
                ${props.isBorderMovingLeft && css`
                  transform-origin: 100% 50%;
                `}
                ${props.isBorderMovingRight && css`
                  transform-origin: 0% 50%;
                `}
              `
            )}
          }
        `
      }
    `
  }

  ${props =>
    props.isFilled &&
    css`
      color: #000;
  `}

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid;
      border-color: #c53030;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    outline: none;
    position: relative;

    &::placeholder {
        color: #666360;
    }

    textarea:focus, input:focus {
      border: none;
      outline: none;
      border-style: none;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const ErrorTooltip = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const ListContainer = styled.div<ContainerProps>`
  z-index: 1;
  position: absolute;
  background: #f2f2f2;
  padding: 5px;
  width: 98%;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: #333;
  display: none;

  ${props =>
    props.isInputClicked && css`display: flex;`
  }

  ${props =>
    props.isValueCLicked && css`display: none;`
  }

  flex-direction: column;
  top: 52px;
  left: 0;

  > button {
    z-index: 0;
    padding: 5px;
    border: 0;
    text-align: left;

    &:hover {
      background: ${shade(0.05, '#f2f2f2')};
    }
  }
`;