import styled from "styled-components";
import ColorAndStyleSwitcher from "../components/ColorAndStyleSwitcher";
import { useStyleColor } from "../contexts/styleColorContext";

function DressingRoomPage({}) {
  const { hairstyle, eyestyle, topstyle } = useStyleColor();

  return (
    <DressingRoomContainer>
      <MainSection></MainSection>
      <SideSection>
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
      </SideSection>
    </DressingRoomContainer>
  );
}

const DressingRoomContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: #000000;
  height: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;

const MainSection = styled.div`
  flex: 1;
  background-image: url("./backgrounds/pinkroom.png");
  background-size: cover;
  height: auto;
  background-position: bottom;
  @media (min-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

const SideSection = styled.div`
  width: 360px;
  height: auto;
  background: ${({ theme }) => theme.primaryLight};
  @media (min-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

export default DressingRoomPage;
