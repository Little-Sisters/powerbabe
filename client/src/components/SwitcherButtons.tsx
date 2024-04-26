import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  onClick: () => void;
  direction: 'next' | 'prev';
}

const SwitcherButton: React.FC<Props>= ({ onClick, direction }) => {
    return (
      <StyledSwitcherButton onClick={onClick}>
        {direction === 'next' ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </StyledSwitcherButton>
    );
  };

  const StyledSwitcherButton = styled.div`
  font-size: 10px;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  background-color: grey;
  color: black;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border-radius: 50%;
`;

export default SwitcherButton;