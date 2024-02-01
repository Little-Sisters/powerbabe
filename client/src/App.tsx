import styled from "styled-components";

interface SpriteProps {
  src: string;
  zindex?: number;
  opacity?: number;
}

function App() {
  return (
    <div className="App">
      <h1>Powerbabe the game version 0</h1>
      <Flex>
        <ChooseBox>
          <button>previous</button>
          <button>next one</button>
        </ChooseBox>
      </Flex>
      <Flex>
        <CharachterContainer>
          <Sprite src="./characters/head-medium.png"></Sprite>
          <Sprite
            src="./characters/lowerbody-2-medium.png"
            zindex={10}
          ></Sprite>
          <Sprite
            src="./characters/upperbody-1-medium.png"
            zindex={10}
          ></Sprite>
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
