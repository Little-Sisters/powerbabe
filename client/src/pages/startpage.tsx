import React from "react";
import styled from "styled-components";


const StartPage: React.FC = () => {

  return (
    <PageContainer>
      <Title>Starting Page</Title>
    </PageContainer>
  );
};


const PageContainer = styled.article`
  padding: 1rem;
`;

const Title = styled.h1`
  color: black;
`;

export default StartPage;
