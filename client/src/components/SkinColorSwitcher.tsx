import React, { useState } from "react";
import { useStyleColor } from "../contexts/styleColorContext";
import {
  PickerBox,
  Switcher,
  SwitcherContentWrapper,
} from "./ColorAndStyleSwitcher";
import ButtonWithIcon from "./SwitcherButtons";

interface Props {
  feature: string;
  colors: string[];
}

const ColorAndStyleSwitcher: React.FC<Props> = ({ feature, colors }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const {
    headstyle,
    upperbodystyle,
    lowerbodystyle,
    setUpperBodystyle,
    setLowerBodystyle,
    setHeadstyle,
  } = useStyleColor();

  const goToNextColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    updateStyles((currentColorIndex + 1) % colors.length);
  };

  const goToPreviousColor = () => {
    setCurrentColorIndex((prevIndex) =>
      prevIndex === 0 ? colors.length - 1 : prevIndex - 1
    );
    updateStyles(
      currentColorIndex === 0 ? colors.length - 1 : currentColorIndex - 1
    );
  };

  // Function to update styles when changing color
  const updateStyles = (index: number) => {
    const color = colors[index];
    setUpperBodystyle(upperbodystyle.style, color);
    setLowerBodystyle(lowerbodystyle.style, color);
    setHeadstyle(color);
  };

  return (
    <Switcher>
      <SwitcherContentWrapper>
        <p>{feature}</p>
        <PickerBox>
        <ButtonWithIcon onClick={goToPreviousColor} direction="prev" />
          <div>
            <span>
              {
                headstyle.color
              }
            </span>
          </div>
          <ButtonWithIcon onClick={goToNextColor} direction="next" />
        </PickerBox>
      </SwitcherContentWrapper>
    </Switcher>
  );
};

export default ColorAndStyleSwitcher;
