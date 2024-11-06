import React, { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '../contexts/UserContext';
import { useWardrobe } from '../contexts/WardrobeContext';
import { ColorAndStyleSwitcher } from './ColorAndStyleSwitcher';
import { SideSectionTitle } from './DesktopSideContentDressupStyle';
import CustomInputField from './TextInput';

interface DesktopSideContentDressupWardrobeProps {
  onSave: () => void;
}

const DesktopSideContentDressupWardrobe: React.FC<
  DesktopSideContentDressupWardrobeProps
> = ({ onSave }) => {
  const { bottomStyleData, topStylesData } = useWardrobe();
  const { myStatus, setStatus } = useUser(); // Access status and setStatus from context
  const [text, setText] = useState(myStatus); // Local state to track the input field value

  // Update local state as user types in the input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // Update the text state with the current value from the input
  };

  // Save the updated status to context
  const handleInputSave = () => {
    setStatus(text); // Use the current value of text to update the status in context
  };

  const wardrobeSwitchers = [
    { feature: 'topstyle', stylesAndColors: topStylesData },
    { feature: 'bottomstyle', stylesAndColors: bottomStyleData },
  ];

  const renderSwitchers = () => {
    return wardrobeSwitchers.map((switcher, index) => (
      <ColorAndStyleSwitcher
        key={index}
        feature={switcher.feature}
        stylesAndColors={switcher.stylesAndColors}
      />
    ));
  };

  return (
    <FlexContainer>
      <SideSectionTitle>Wardrobe</SideSectionTitle>
      <SwitcherContainer>{renderSwitchers()}</SwitcherContainer>
      <SideContentFooter>
        <NameBox>
          <p>Update your status!</p>
          <CustomInputField
            placeholder="Update status"
            value={text}
            onChange={handleInputChange} // Update text on input change
          />
          <button onClick={handleInputSave}>Save Status!</button>{' '}
          {/* Trigger status save on click */}
        </NameBox>
        <ReadyButton onClick={onSave}>Save!</ReadyButton>
      </SideContentFooter>
    </FlexContainer>
  );
};

export const SideContentFooter = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const ReadyButton = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
`;

export const NameBox = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  padding: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const SwitcherContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Basic box shadow */
  border-radius: 5px;
`;

export default DesktopSideContentDressupWardrobe;
