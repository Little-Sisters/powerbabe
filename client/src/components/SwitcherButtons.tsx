import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  onClick: () => void;
  direction: 'next' | 'prev';
}

const SwitcherButton: React.FC<Props> = ({ onClick, direction }) => {
  return (
    <StyledSwitcherButton onClick={onClick}>
      {direction === 'next' ? <IoIosArrowForward /> : <IoIosArrowBack />}
    </StyledSwitcherButton>
  );
};

const StyledSwitcherButton = styled.div`
  font-size: 12px;
  cursor: pointer;
  width: 1.4rem;
  color: black;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border-radius: 50%;
`;

export default SwitcherButton;
