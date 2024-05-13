import styled from "styled-components";
import Character from "../components/Character";
import DesktopSideContentDressup from "../components/DesktopSideContentDressup";
import MobileSideContentDressup from "../components/MobileSideContentDressup";
import useMediaQuery from "../hooks/useMediaQuery";

function DressingRoomPage() {
  const isMobile = useMediaQuery({ breakpoint: 870 });

  return (
    <DressingRoomContainer>
      <MainSection>
        <Character />
      </MainSection>
      <SideSection>
        {isMobile ? (
          <MobileSideContentDressup />
        ) : (
          <DesktopSideContentDressup />
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
  @media (max-width: 870px) {
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
  background-position: bottom;
  @media (max-width: 870px) {
    width: 100%;
    height: 400px;
    border-radius: 0rem;
  }
`;

const SideSection = styled.div`
  width: 380px;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: ${({ theme }) => theme.primaryLight};
  @media (max-width: 870px) {
    width: 100%;
    height: 14rem;
    border-radius: 0rem;
  }
`;

export default DressingRoomPage;
