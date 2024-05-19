import React from "react";
import styled from "styled-components";
import { StylesAndColorsData } from "../assets/IStylesAndColors";
import { useShop } from "../contexts/ShopContext";
import { useWardrobe } from "../contexts/WardrobeContext";

const ShopPage: React.FC = () => {
  const { SHOPtopStyles } = useShop();

  const { addToWardrobe } = useWardrobe();

  const handleBuy = (style: StylesAndColorsData) => {
    addToWardrobe("top", style);
  };
  console.log(SHOPtopStyles);

  const renderTopStyles = () => {
    return SHOPtopStyles.map((style) => (
      <Card key={style.number}>
        <CardTitle>{style.title}</CardTitle>
        {style.SHOPimage && <ShopImage src={style.SHOPimage} />}
        <ColorsContainer>
          {style.colors.map((color, index) => (
            <ColorDot key={index} style={{ backgroundColor: color }} />
          ))}
        </ColorsContainer>
        <ButtonContainer>
          <OutLinedButton>1$</OutLinedButton>
          <FilledButton
            onClick={() => handleBuy(style)}
            disabled={style.purchased}
          >
            {style.purchased ? "Purchased" : "Buy"}
          </FilledButton>
        </ButtonContainer>
      </Card>
    ));
  };

  return (
    <PageContainer>
      <Title>Shop</Title>
      <CardsContainer>{renderTopStyles()}</CardsContainer>
    </PageContainer>
  );
};

const OutLinedButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.button};
  flex: 1;
`;

const FilledButton = styled.button<{ disabled: boolean }>`
  flex: 1;
  background-color: ${({ theme, disabled }) =>
    disabled ? "#ccc" : theme.button};
  color: ${({ disabled }) => (disabled ? "#666" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const ShopImage = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const PageContainer = styled.article`
  padding: 1rem;
`;

const Title = styled.h1`
  color: black;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Default to 1 column */
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on large screens */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      5,
      1fr
    ); /* 5 columns on extra large screens */
  }
`;

const Card = styled.div`
  background: #fff;
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.6rem;
  width: 100%; /* Make sure the card takes full width of the grid column */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  @media (min-width: 576px) {
    padding: 1rem;
  }
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

export default ShopPage;
