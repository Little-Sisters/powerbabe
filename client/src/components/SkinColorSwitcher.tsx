import React, { useState } from 'react';
import { useStyleColor } from '../contexts/styleColorContext';
import {
  Feauture,
  PickerBox,
  Switcher,
  SwitcherContentWrapper,
} from './ColorAndStyleSwitcher';
import ButtonWithIcon from './SwitcherButtons';

interface Props {
  feature: string;
  colors: string[];
}

const SkinColorSwitcher: React.FC<Props> = ({ feature, colors }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const {
    // Temporary styles for displaying changes
    temporaryHeadstyle,
    temporaryUpperBodystyle,
    temporaryLowerBodystyle,

    // Temporary state setters
    setTemporaryUpperBodystyle,
    setTemporaryLowerBodystyle,
    setTemporaryHeadstyle,
  } = useStyleColor();

  const goToNextColor = () => {
    const nextIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextIndex);
    updateStyles(nextIndex);
  };

  const goToPreviousColor = () => {
    const prevIndex =
      currentColorIndex === 0 ? colors.length - 1 : currentColorIndex - 1;
    setCurrentColorIndex(prevIndex);
    updateStyles(prevIndex);
  };

  // Function to update temporary styles when changing color
  const updateStyles = (index: number) => {
    const color = colors[index];
    setTemporaryUpperBodystyle(temporaryUpperBodystyle.style, color);
    setTemporaryLowerBodystyle(temporaryLowerBodystyle.style, color);
    setTemporaryHeadstyle(color);
  };

  return (
    <Switcher>
      <SwitcherContentWrapper>
        <Feauture>{feature}</Feauture>
        <PickerBox>
          <ButtonWithIcon onClick={goToPreviousColor} direction="prev" />
          <div>
            <span>{temporaryHeadstyle.color}</span>
          </div>
          <ButtonWithIcon onClick={goToNextColor} direction="next" />
        </PickerBox>
      </SwitcherContentWrapper>
    </Switcher>
  );
};

export default SkinColorSwitcher;
