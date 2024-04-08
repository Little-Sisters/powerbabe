import styled from "styled-components";
import { useEyeStyle, eyeStyles } from "../contexts/eyeContext";

function DressingRoomPage() {
  const {
    currentStyleIndex,
    setCurrentStyleIndex,
    currentColorIndex,
    setCurrentColorIndex,
    goToNextStyle,
    goToPreviousStyle,
    goToNextColor,
    goToPreviousColor,
    currentStyleColors, 
  } = useEyeStyle();

  return (
    <DressingRoomContainer>
      <MainSection>
        <h1>Main Content</h1>
        <div>
          <h2>Current Style: {eyeStyles[currentStyleIndex]}</h2>
          <button onClick={goToPreviousStyle}>Previous Style</button>
          <button onClick={goToNextStyle}>Next Style</button>
          <h2>Current Color: {currentStyleColors[currentColorIndex]}</h2>
          <button onClick={goToPreviousColor}>Previous Color</button>
          <button onClick={goToNextColor}>Next Color</button>
          {/* Display the current style and color combination */}
          <h2>Available Colors:</h2>
          <ul>
            {currentStyleColors.map((color, index) => (
              <li key={index}>{color}</li>
            ))}
          </ul>
        </div>
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
