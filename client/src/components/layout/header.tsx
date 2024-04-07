import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import styled, { useTheme } from "styled-components";


interface HeaderProps {
  themeToggler: () => void;
  theme: string;
}

function Header({ themeToggler, theme }: HeaderProps) {
  const [backdropFilter, setBackdropFilter] = useState("none");
  // const [backgroundColor, setBackgroundColor] = useState("transparent");
  const { scrollY } = useScroll();
  const myTheme = useTheme()

  useEffect(() => {
    if (scrollY.get() > 5) {
      // setBackgroundColor(myTheme.bodyOpacity);
      setBackdropFilter("blur(6px)");
    }
    if (scrollY.get() < 5) {
      //setBackgroundColor("transparent");
      setBackdropFilter("none");
    }
  }, [theme, myTheme.bodyOpacity, scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const newBackgroundColor = latest > 0 ? myTheme.bodyOpacity : "transparent";
    //setBackgroundColor(newBackgroundColor);
    if (latest > 0) {
      setBackdropFilter("blur(6px)");
    }
  });

  return (
    <StyledHeader
      style={{
        backdropFilter: backdropFilter,
      }}
    >
        <HeaderFlex>
          <div>
            <h2>PowerGirl</h2>
          </div>
          <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/dressing-room">Dressingroom</StyledNavLink>
            <button onClick={themeToggler}>Toggle</button>
          </Nav>
        </HeaderFlex>

    </StyledHeader>
  );
}
const StyledHeader = styled(motion.header)`
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  background: ${({ theme }) =>
  theme.primary}; // Black overlay with 50% opacity
  height: 3rem;
  top: 0;
  z-index: 10000;
  transition: all 0.3s ease;
`;
const HeaderFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  @media (max-width: 700px) {
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)``;

export default Header;
