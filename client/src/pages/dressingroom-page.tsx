import styled from "styled-components";
import DesktopSideContentDressup from "../components/DesktopSideContentDressup";
import MobileSideContentDressup from "../components/MobileSideContentDressup";
import useMediaQuery from "../hooks/useMediaQuery";
import Character from "../components/Character";

function DressingRoomPage() {

  const isMobile = useMediaQuery({ breakpoint: 768 });

  return (
    <DressingRoomContainer>
      <MainSection>
        <Character/>
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
  overflow-x: visible;
  height: auto;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    padding: 0rem;
  }
`;

const MainSection = styled.div`
  flex: 1;
  position: relative;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background-color: #5c5c5c;
  background-size: cover;
  height: auto;
  background-position: bottom;
  @media (max-width: 767px) {
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
  @media (max-width: 767px) {
    width: 100%;
    height: 14rem;
    border-radius: 0rem;
  }
`;

export default DressingRoomPage;
