import { useState } from 'react';
import styled from 'styled-components';
import Character from '../components/Character';
import DesktopSideContentDressupStyle from '../components/DesktopSideContentDressupStyle';
import DesktopSideContentDressupWardrobe from '../components/DesktopSideContentDressupWardrobe';
import MobileSideContentDressup from '../components/MobileSideContentDressup';
import useMediaQuery from '../hooks/useMediaQuery';

function DressingRoomPage() {
  const isMobile = useMediaQuery({ breakpoint: 1051 });
  const backgrounds = [
    './backgrounds/room1.png',
    './backgrounds/room_pink.png',
    './backgrounds/room_black.png',
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const handleChangeBackground = () => {
    setCurrentBackgroundIndex(
      prevIndex => (prevIndex + 1) % backgrounds.length,
    );
  };
  return (
    <DressingRoomContainer>
      {!isMobile && (
        <SideSection>
          <DesktopSideContentDressupStyle />
        </SideSection>
      )}
      <MainSection backgroundImage={backgrounds[currentBackgroundIndex]}>
        <Character />
        <ChangeBackgroundButton
          onClick={handleChangeBackground}
          className="btn-secondary"
        >
          Change room
        </ChangeBackgroundButton>
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
  overflow: hidden;
  min-height: 620px;
  height: calc(100vh - 3rem);

  @media (max-width: 1051px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    padding: 0rem;
  }
`;

interface MainSectionProps {
  backgroundImage: string;
}

const MainSection = styled.div<MainSectionProps>`
  flex: 1;
  position: relative;
  background-size: cover;
  height: auto;
  background-color: #d8d8d8;
  background-image: url(${props => props.backgroundImage});
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Basic box shadow */
  background: ${({ theme }) => theme.primaryLight};
  @media (max-width: 1051px) {
    width: 100%;
    height: 14rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 0rem;
  }
`;

const ChangeBackgroundButton = styled.button`
  position: absolute;
  bottom: 3%;
  left: 10px;
  z-index: 500;
  cursor: pointer;
`;

export default DressingRoomPage;
