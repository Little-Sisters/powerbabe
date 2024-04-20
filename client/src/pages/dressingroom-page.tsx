import styled from "styled-components";
import ColorAndStyleSwitcher from "../components/ColorAndStyleSwitcher";
import { ImageComponent } from "../components/ImageComponent";
import { useStyleColor } from "../contexts/styleColorContext";

function DressingRoomPage({}) {
  const {
    hairstyle,
    eyestyle,
    topstyle,
    bottomstyle,
    eyebrowstyle,
    upperbodystyle,
    lowerbodystyle,
    lipstyle
  } = useStyleColor();

  return (
    <DressingRoomContainer>
      <MainSection>
        <ImageComponent
          style={hairstyle.style}
          color={hairstyle.color}
          part="hair"
          zIndex={9}
        />
        <ImageComponent
          style={eyestyle.style}
          color={eyestyle.color}
          part="eyes"
          zIndex={20}
        />
        <ImageComponent
          style={eyebrowstyle.style}
          color={eyebrowstyle.color}
          part="eyebrows"
          zIndex={7}
        />
        <ImageComponent
          style={lipstyle.style}
          color={lipstyle.color}
          part="lips"
          zIndex={7}
        />
        <ImageComponent
          style={topstyle.style}
          color={topstyle.color}
          part="top"
          zIndex={21}
        />
        <ImageComponent
          style={bottomstyle.style}
          color={bottomstyle.color}
          part="bottoms"
          zIndex={20}
        />
        <ImageComponent
          style={upperbodystyle.style}
          color={upperbodystyle.color}
          part="upperbody"
          zIndex={12}
        />
        <ImageComponent
          style={lowerbodystyle.style}
          color={lowerbodystyle.color}
          part="lowerbody"
          zIndex={10}
        />
        <ImageComponent
          style={upperbodystyle.style}
          color={upperbodystyle.color}
          part="head"
          zIndex={6}
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
            1: ["blue", "brown", "green"],
            2: ["blue", "brown", "green"],
            3: ["blue", "brown", "green"],
          }}
        />
        <ColorAndStyleSwitcher
          feature="eyebrowstyle"
          stylesAndColors={{
            1: ["brown", "black", "blonde"],
            2: ["brown", "black", "blonde"],
          }}
        />
        <ColorAndStyleSwitcher
          feature="lipstyle"
          stylesAndColors={{
            1: ["burgundy", "hotpink", "red"],
            2: ["burgundy", "hotpink", "red"],
            3: ["burgundy", "hotpink", "red"],
          }}
        />
        <ColorAndStyleSwitcher
          feature="topstyle"
          stylesAndColors={{
            1: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
            2: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
            3: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
            4: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
          }}
        />
        <ColorAndStyleSwitcher
          feature="bottomstyle"
          stylesAndColors={{
            1: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
            2: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
            3: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
            4: [
              "blue",
              "green",
              "black",
              "yellow",
              "red",
              "hotpink",
              "pastelpink",
              "purple",
            ],
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
  background: #888888;
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
