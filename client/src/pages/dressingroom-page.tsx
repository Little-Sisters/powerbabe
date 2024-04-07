import styled from "styled-components";

const DressingRoomContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainSection = styled.div`
  flex: 1;
  background-image: url("./backgrounds/pinkroom.png"); 
  opacity: 0.4;

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

function DressingRoomPage() {
  return (
    <DressingRoomContainer>
      <MainSection>
        <h1>Main Content</h1>
      </MainSection>
      <SideSection>
        <h1>Side Content</h1>
      </SideSection>
    </DressingRoomContainer>
  );
}

export default DressingRoomPage;
