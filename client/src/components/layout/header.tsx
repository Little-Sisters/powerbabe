import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggler from './ThemeToggle';
import PageContentWrapper from './styled';

interface HeaderProps {
  themeToggler: () => void;
  theme: string;
}

function Header({ themeToggler, theme }: HeaderProps) {
  return (
    <StyledHeader>
      <PageContentWrapper>
        <HeaderFlex>
          <div>
            <h2>PowerGirl</h2>
          </div>
          <Nav>
            <ThemeToggler themeToggler={themeToggler} theme={theme} />{' '}
            {/* Replace with ThemeToggler */}
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/shop">Shop</StyledNavLink>
            <StyledNavLink to="/dressing-room">Dressing room</StyledNavLink>
          </Nav>
        </HeaderFlex>
      </PageContentWrapper>
    </StyledHeader>
  );
}

// Styled components for the header layout
const StyledHeader = styled(motion.header)`
  width: 100%;
  position: fixed;
  background: ${({ theme }) => theme.primary}; // Black overlay with 50% opacity
  top: 0;
  z-index: 10000;
  transition: all 0.3s ease;
  transition: backdrop-filter 0.3s ease-in-out;
  height: 3rem;
  
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

export default Header;
