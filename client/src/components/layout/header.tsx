import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import ThemeToggler from './ThemeToggle';
import PageContentWrapper from './styled';

interface HeaderProps {
  themeToggler: () => void;
  theme: string;
}

function Header({ themeToggler, theme }: HeaderProps) {
  const isMobile = useMediaQuery({ breakpoint: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <PageContentWrapper>
        <HeaderFlex>
          <div>
            <h2>PowerGirl</h2>
          </div>
          {isMobile ? (
            <>
              <RightBox>
                <ThemeToggler themeToggler={themeToggler} theme={theme} />
                <BurgerMenu onClick={toggleMenu}>
                  <span />
                  <span />
                  <span />
                </BurgerMenu>
              </RightBox>
              <MobileNav
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? '0%' : '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <CloseMenu onClick={toggleMenu}>×</CloseMenu>
                <StyledNavLink onClick={toggleMenu} to="/">
                  Home
                </StyledNavLink>
                <StyledNavLink onClick={toggleMenu} to="/shop">
                  Shop
                </StyledNavLink>
                <StyledNavLink onClick={toggleMenu} to="/dressing-room">
                  Dressing room
                </StyledNavLink>
              </MobileNav>
            </>
          ) : (
            <Nav>
              <ThemeToggler themeToggler={themeToggler} theme={theme} />
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/shop">Shop</StyledNavLink>
              <StyledNavLink to="/dressing-room">Dressing room</StyledNavLink>
            </Nav>
          )}
        </HeaderFlex>
      </PageContentWrapper>
    </StyledHeader>
  );
}

// Styled components for the header layout
const StyledHeader = styled(motion.header)`
  width: 100%;
  position: fixed;
  background: ${({ theme }) => theme.primary};
  top: 0;
  z-index: 10000;
  transition: all 0.3s ease;
  height: 3rem;
`;

const RightBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const BurgerMenu = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 0.5rem;

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.white};
    transition: all 0.3s ease;
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CloseMenu = styled.div`
  position: absolute;
  top: 0rem;
  right: 1.5rem;
  font-size: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
`;

export default Header;
