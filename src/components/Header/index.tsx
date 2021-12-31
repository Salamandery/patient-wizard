import React from 'react';
import { FaList } from 'react-icons/fa';

import {
  Container,
  Logo,
  LogoWrapper,
  MenuButton,
  MenuIcon
} from './styles';

import logo from './logo192.png';

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo
          src={logo}
          alt="logo" />
      </LogoWrapper>
      <MenuButton>
        <MenuIcon>
          <FaList size={26} />
        </MenuIcon>
      </MenuButton>
    </Container>
  )
}

export default Header;