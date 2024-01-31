import { useState } from "react";
import styled from "styled-components";

interface SpriteProps {
  src: string;
  zindex?: number;
  opacity?: number;
}

function App() {
  const [hairIndex, setHairIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);

  const hairArray = [
    "./characters/hair-light-1.png",
    "./characters/hair-2-dark.png",
    // Add more hair images as needed
  ];

  const topArray = [
    "./characters/top-1-black.png",
    "./characters/top-2-black.png",
    // Add more top images as needed
  ];

  const changeHair = () => {
    console.log("changing hair");
    setHairIndex((prevIndex) => (prevIndex + 1) % hairArray.length);
  };

  const changeTop = () => {
    console.log("changing top");
    setTopIndex((prevIndex) => (prevIndex + 1) % topArray.length);
  };

  return (
    <div className="App">
      <h1>Powerbabe the game version 0</h1>
      <Flex>
        <button onClick={changeHair}>Change Hair</button>
        <button onClick={changeTop}>Change Top</button>
      </Flex>
      <CharachterContainer>
        <Sprite src={topArray[topIndex]} zindex={25}></Sprite>
        <Sprite src="./characters/bottoms-1-blue.png" zindex={20}></Sprite>
        <Sprite src="./characters/eyes-1-blue.png" zindex={3}></Sprite>
        <Sprite src="./characters/eyebrows-light-1.png" zindex={3}></Sprite>
        <Sprite src="./characters/lips-1-pink.png" zindex={3}></Sprite>
        <Sprite src="./characters/head-1.png" zindex={2}></Sprite>
        <Sprite src="./characters/lowerbody-light-1.png" zindex={10}></Sprite>
        <Sprite src={hairArray[hairIndex]} zindex={5}></Sprite>
        <Sprite src="./characters/upperbody-light-1.png" zindex={10}></Sprite>
      </CharachterContainer>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
`;

const CharachterContainer = styled.div`
  height: 40rem;
  background: #ffffff;
  width: 100%;
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
