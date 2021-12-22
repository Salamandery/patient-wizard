import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isBorderMovingLeft?: boolean;
  isBorderMovingRight?: boolean;
  isBorderAnimationPingPong?: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #000;
  background: #E5E5E5;
  border-radius: 2px;
  position:relative;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  &:after, &:before {
    display:block;
    content: '';
    border-bottom: solid 1px #000;
    transform: scaleX(0);
    ${props => !props.isErrored && css`
      transition: transform .4s ease-in-out;
    `}
    ${props => props.isBorderMovingLeft && css`
      transform-origin: 0% 50%;
    `}
    ${props => props.isBorderMovingRight && css`
      transform-origin:100% 50%;
    `}
  }
  &:before{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
  }

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #000;
      border-color: #000;
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
  `}

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