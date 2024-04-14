import styled from "styled-components";
import ColorAndStyleSwitcher from "../components/ColorAndStyleSwitcher";
import { ImageComponent } from "../components/ImageComponent";
import { useStyleColor } from "../contexts/styleColorContext";

function DressingRoomPage({}) {
  const { hairstyle, eyestyle, topstyle } = useStyleColor();

  return (
    <DressingRoomContainer>
      <MainSection>
        <ImageComponent
          style={hairstyle.style}
          color={hairstyle.color}
          part="hair"
        />
      </MainSection>
      <SideSection>
        <ColorAndStyleSwitcher
          feature="hairstyle"
          stylesAndColors={{
            1: [
              "brown",
              "black",
              "blonde",
              "ginger",
              "green",
              "pink",
              "blue",
              "red",
            ],
            2: [
              "brown",
              "black",
              "blonde",
              "ginger",
              "green",
              "pink",
              "blue",
              "red",
            ],
            3: [
              "brown",
              "black",
              "blonde",
              "ginger",
              "green",
              "pink",
              "blue",
              "red",
            ],
            4: [
              "brown",
              "black",
              "blonde",
              "ginger",
              "green",
              "pink",
              "blue",
              "red",
            ],
          }}
        />
        <ColorAndStyleSwitcher
          feature="eyestyle"
          stylesAndColors={{
            1: ["blue", "green", "brown", "magenta"],
            2: ["red", "yellow", "purple", "blue"],
            3: ["cyan", "magenta", "orange", "red"],
          }}
        />
        <ColorAndStyleSwitcher
          feature="topstyle"
          stylesAndColors={{
            1: ["blue", "green", "brown", "magenta"],
            2: ["red", "yellow", "purple", "blue"],
            3: ["cyan", "magenta", "orange", "red"],
          }}
        />
      </SideSection>
    </DressingRoomContainer>
  );
}

const DressingRoomContainer = styled.section`
  display: flex;
  color: #000000;
  height: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    background: red;
    height: 100vh;
  }
`;

const MainSection = styled.div`
  flex: 1;
  position: relative;
  background: white;
  background-size: cover;
  width: 100%;
  height: auto;
  background-position: bottom;
  @media (max-width: 767px) {
    width: 100%;
    height: 400px;
  }
`;

const SideSection = styled.div`
  width: 360px;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: row;
  }
`;

export default DressingRoomPage;
