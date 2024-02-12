import { useState } from "react";
import styled from "styled-components";
import {
  BodyImage,
  headArray,
  lowerBodyImages,
  upperBodyImages,
} from "../public/data/bodyData";

interface SpriteProps {
  src: string;
  zindex?: number;
  opacity?: number;
}
const colors = ["light", "medium", "dark", "yellow", "darker"];

function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentLowerBodyNumber, setCurrentLowerBodyNumber] = useState(1);

  const handleColorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handleLowerBodyChange = () => {
    setCurrentLowerBodyNumber((prevNumber) => (prevNumber === 1 ? 2 : 1));
  };

  const headImage = headArray[currentColorIndex];
  return (
    <div className="App">
      <h1>Powerbabe the game version 0</h1>
      <Flex>
        <ChooseBox>
          <button onClick={handleColorChange}>Change Color</button>
          <button onClick={handleLowerBodyChange}>Change Lower Body</button>
        </ChooseBox>
      </Flex>
      <Flex>
        <CharachterContainer>

          <Sprite src={headImage} zindex={3} />
        </CharachterContainer>
      </Flex>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  width: 100%;
  background: beige;
  justify-content: center;
  align-items: center;
`;

const ChooseBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  height: 7rem;
  background: hotpink;
`;

const CharachterContainer = styled.div`
  height: 40rem;
  background: #ffa6f3;
  width: 20rem;
  position: relative;
`;

const Sprite = styled.img<SpriteProps>`
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: ${(props) => props.zindex || 1};
  opacity: ${(props) => props.opacity || 1};
`;

export default App;
