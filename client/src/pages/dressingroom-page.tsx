import styled from "styled-components";
import ColorAndStyleSwitcher from "../components/ColorAndStyleSwitcher";

function DressingRoomPage({}) {
  return (
    <DressingRoomContainer>
      <MainSection>
        <ColorAndStyleSwitcher
          stylesAndColors={{
            hairStyle1: ["black", "blonde", "brunette", "red"],
            hairStyle2: ["pink", "blue", "purple", "green"],
            hairStyle3: ["gray", "white", "silver", "gold"],
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
