import styled, { useTheme } from "styled-components";
import Character from "../components/Character";
import MobileSideContentDressup from "../components/MobileSideContentDressup";
import useMediaQuery from "../hooks/useMediaQuery";
import DesktopSideContentDressupWardrobe from "../components/DesktopSideContentDressupWardrobe";
import DesktopSideContentDressupStyle from "../components/DesktopSideContentDressupStyle";

function DressingRoomPage() {
  const isMobile = useMediaQuery({ breakpoint: 1051 });
  const myTheme = useTheme();

  return (
    <DressingRoomContainer>
      {!isMobile && (
        <SideSection>
          <DesktopSideContentDressupStyle />
        </SideSection>
      )}
      <MainSection>
        <Character />
      </MainSection>
      <SideSection>
        {isMobile ? (
          <MobileSideContentDressup />
        ) : (
          <DesktopSideContentDressupWardrobe />
        )}
      </SideSection>
    </DressingRoomContainer>
  );
}

const DressingRoomContainer = styled.section`
  display: flex;
  color: #000000;
  min-height: 770px;
  height: 94vh;
  padding: 1rem;
  padding-bottom: 2rem;
  @media (max-width: 1051px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    padding: 0rem;
  }
  @media (max-height: 901px) {
    height: 93vh;
  }
`;

const MainSection = styled.div`
  flex: 1;
  position: relative;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background-size: cover;
  height: auto;
  background-color: #d8d8d8;
  background-image: url('./backgrounds/pink.png');
  background-position: bottom;
  @media (max-width: 1051px) {
    width: 100%;
    height: 400px;
    border-radius: 0rem;
  }
`;

const SideSection = styled.div`
  width: 20rem;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.primaryLight};
  @media (max-width: 1051px) {
    width: 100%;
    height: 16rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 0rem;
  }
`;

export default DressingRoomPage;
