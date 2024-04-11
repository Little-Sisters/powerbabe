import styled from "styled-components";
import ColorAndStyleSwitcher from "../components/ColorAndStyleSwitcher";

function DressingRoomPage({}) {
  return (
    <DressingRoomContainer>
      <MainSection>
        <ColorAndStyleSwitcher
          feature="hairstyle"
          stylesAndColors={{
            style1: ["blue", "green", "brown", "magenta"],
            style2: ["red", "yellow", "purple", "blue"],
            style3: ["cyan", "magenta", "orange", "red"],
          }}
        />
        <ColorAndStyleSwitcher
          feature="eyestyle"
          stylesAndColors={{
            style1: ["blue", "green", "brown", "magenta"],
            style2: ["red", "yellow", "purple", "blue"],
            style3: ["cyan", "magenta", "orange", "red"],
          }}
        />
        <ColorAndStyleSwitcher
          feature="topstyle"
          stylesAndColors={{
            style1: ["blue", "green", "brown", "magenta"],
            style2: ["red", "yellow", "purple", "blue"],
            style3: ["cyan", "magenta", "orange", "red"],
          }}
        />
      </MainSection>
      <SideSection>
        <h1>Side Content</h1>
      </SideSection>
    </DressingRoomContainer>
  );
}

const DressingRoomContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: #000000;
  height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainSection = styled.div`
  flex: 1;
  background-image: url("./backgrounds/pinkroom.png");

  background-size: cover;
  background-position: bottom;
  @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

const SideSection = styled.div`
  width: 360px;
  height: 100vh;
  background: ${({ theme }) => theme.primaryLight};
  @media (max-width: 767px) {
    width: 100%;
    height: 230px;
  }
`;

export default DressingRoomPage;
