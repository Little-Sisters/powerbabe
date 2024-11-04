import React from 'react';
import styled from 'styled-components';

interface ButtonLink {
  text: string;
  link: string;
  color: 'primary' | 'secondary';
}

interface Props {
  title: string;
  text: string;
  buttonLinks: ButtonLink[];
  backgroundImage: string;
}

export const Hero: React.FC<Props> = ({
  title,
  text,
  buttonLinks,
  backgroundImage,
}) => {
  return (
    <HeroSection backgroundImage={backgroundImage}>
      <Overlay></Overlay>
      <Content>
        <Title>{title}</Title>
        <Description>{text}</Description>
        <ButtonContainer>
          {buttonLinks.map((button, index) => (
            <button key={index} className={`btn-${button.color}`}>
              {button.text}
            </button>
          ))}
        </ButtonContainer>
      </Content>
    </HeroSection>
  );
};

// Styled components
const HeroSection = styled.section<{ backgroundImage: string }>`
  height: 20rem;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    height: 20rem;
  }
`;

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ theme }) => `rgba(${hexToRgb(theme.overlay)}, 0.1)`},
    ${({ theme }) => `rgba(${hexToRgb(theme.overlay)}, 0.7)`}
  );
`;

const Content = styled.div`
  text-align: center;
  max-width: 45rem;
  padding: 0rem 1rem;
  color: ${({ theme }) => theme.text};
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 3rem;
  display: inline-block;
  margin-bottom: 1rem;
  padding: 3px 3rem;
  width: auto;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  @media (max-width: 700px) {
    padding: 3px 3rem;
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 700px) {
    font-size: 1.35rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
