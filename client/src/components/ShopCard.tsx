// ShopCard.tsx
import React from 'react';
import styled from 'styled-components';
import { StylesAndColorsData } from '../assets/IStylesAndColors';

interface ShopCardProps {
  style: StylesAndColorsData;
  onBuy: (style: StylesAndColorsData) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ style, onBuy }) => {
  console.log('card', style);
  return (
    <Card>
      <CardTitle>{style.title}</CardTitle>
      {style.SHOPimage && <ShopImage src={style.SHOPimage} />}
      <ColorsContainer>
        {style.colors.map((color, index) => (
          <ColorDot key={index} style={{ backgroundColor: color }} />
        ))}
      </ColorsContainer>
      <ButtonContainer>
        <OutLinedButton>10$</OutLinedButton>
        <FilledButton onClick={() => onBuy(style)} disabled={style.purchased}>
          {style.purchased ? 'Purchased' : 'Buy'}
        </FilledButton>
      </ButtonContainer>
    </Card>
  );
};

export default ShopCard;

// Styled components (you can keep them here or in a separate file)
const Card = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 0.6rem;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 576px) {
    padding: 1rem;
  }
`;

const ShopImage = styled.img`
  width: 100%;
  padding-top: 10px;
`;

const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const ColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  @media (min-width: 568px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem;
  }
`;

const OutLinedButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  flex: 1;
`;

const FilledButton = styled.button<{ disabled: boolean }>`
  flex: 1;
  background-color: ${({ theme, disabled }) =>
    disabled ? '#ccc' : theme.button};
  color: ${({ disabled }) => (disabled ? '#666' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
