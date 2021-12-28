import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  background: #2984bc;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  margin: 10px 20px;
  min-width: 10px;
  min-height: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  background: #1c587d;
`;

export const Logo = styled.img`
  min-width: 10px;
  min-height: 10px;
  width: 50px;
  height: 50px;
`;

export const MenuIcon = styled.div`
  min-width: 20px;
  min-height: 20px;
`;

export const MenuButton = styled.button`
  border: 0;
  padding-right: 20px;
  min-width: 30px;
  min-height: 30px;
  color: #fff;
  background: #2984bc;
  transition: background-color .9s;

  &:hover {
    background: ${shade(0.2, '#2F94D2')};
  }
`;