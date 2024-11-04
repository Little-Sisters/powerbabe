import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import { useStyleColor } from '../contexts/styleColorContext';
import SwitcherButton from './SwitcherButtons';

interface ColorAndStyleSwitcherProps {
  feature: string;
  stylesAndColors: StylesAndColorsData[];
}

export const ColorAndStyleSwitcher: React.FC<ColorAndStyleSwitcherProps> = ({
  feature,
  stylesAndColors,
}) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const {
    hairstyle,
    headstyle,
    eyestyle,
    topstyle,
    bottomstyle,
    eyebrowstyle,
    upperbodystyle,
    lowerbodystyle,
    lipstyle,
    temporaryUpperBodystyle,
    setTemporaryEyestyle,
    setTemporaryHairstyle,
    setTemporaryTopstyle,
    setTemporaryBottomstyle,
    setTemporaryEyebrowstyle,
    setTemporaryLipstyle,
    setTemporaryLowerBodystyle,
    setTemporaryUpperBodystyle,
  } = useStyleColor();

  const setInitialValues = (feature: string) => {
    let storedStyle = '';
    let storedColor = '';

    switch (feature) {
      case 'hairstyle':
        storedStyle = hairstyle.style || '';
        storedColor = hairstyle.color || '';
        break;
      case 'eyestyle':
        storedStyle = eyestyle.style || '';
        storedColor = eyestyle.color || '';
        break;
      case 'lipstyle':
        storedStyle = lipstyle.style || '';
        storedColor = lipstyle.color || '';
        break;
      case 'topstyle':
        storedStyle = topstyle.style || '';
        storedColor = topstyle.color || '';
        break;
      case 'eyebrowstyle':
        storedStyle = eyebrowstyle.style || '';
        storedColor = eyebrowstyle.color || '';
        break;
      case 'bottomstyle':
        storedStyle = bottomstyle.style || '';
        storedColor = bottomstyle.color || '';
        break;
      case 'upperbodystyle':
        storedStyle = upperbodystyle.style || '';
        storedColor = upperbodystyle.color || '';
        break;
      case 'lowerbodystyle':
        storedStyle = lowerbodystyle.style || '';
        storedColor = lowerbodystyle.color || '';
        break;
      case 'headstyle':
        storedColor = headstyle.color || '';
        break;
      default:
        break;
    }

    const initialStyleIndex =
      storedStyle !== ''
        ? stylesAndColors.findIndex(item => item.number === storedStyle)
        : 0;
    const initialColorIndex =
      storedColor !== ''
        ? stylesAndColors[initialStyleIndex].colors.findIndex(
            color => color === storedColor,
          )
        : 0;

    setCurrentStyleIndex(initialStyleIndex);
    setCurrentColorIndex(initialColorIndex);
  };

  useEffect(() => {
    setInitialValues(feature);
  }, [feature, stylesAndColors]);

  useEffect(() => {
    setCurrentStyle(
      stylesAndColors[currentStyleIndex].number,
      currentColorIndex,
    );
  }, [currentStyleIndex, currentColorIndex]);

  const setCurrentStyle = (styleKey: string, colorIndex: number) => {
    const currentStyle = stylesAndColors.find(
      style => style.number === styleKey,
    );
    if (!currentStyle) return;

    const colors = currentStyle.colors;
    const currentColor = colors[colorIndex];

    switch (feature) {
      case 'topstyle':
        setTemporaryUpperBodystyle(
          currentStyle.pose?.toString() ?? '',
          temporaryUpperBodystyle.color,
        );
        setTemporaryTopstyle(styleKey, currentColor);
        break;
      case 'bottomstyle':
        setTemporaryLowerBodystyle(
          currentStyle.pose?.toString() ?? '',
          temporaryUpperBodystyle.color,
        );
        setTemporaryBottomstyle(styleKey, currentColor);
        break;
      case 'hairstyle':
        setTemporaryHairstyle(
          styleKey,
          currentColor,
          currentStyle.pose !== undefined,
        );
        break;
      case 'eyestyle':
        setTemporaryEyestyle(styleKey, currentColor);
        break;
      case 'lipstyle':
        setTemporaryLipstyle(styleKey, currentColor);
        break;
      case 'eyebrowstyle':
        setTemporaryEyebrowstyle(styleKey, currentColor);
        break;
      default:
        break;
    }
  };

  const updateColorIndexForNewStyle = (newStyleKey: string) => {
    const currentColor =
      stylesAndColors[currentStyleIndex].colors[currentColorIndex];
    const newStyle = stylesAndColors.find(
      style => style.number === newStyleKey,
    );
    if (!newStyle) return;

    const newColorIndex = newStyle.colors.indexOf(currentColor);
    setCurrentColorIndex(newColorIndex !== -1 ? newColorIndex : 0);
  };

  const goToNextStyle = () => {
    const nextStyleIndex = (currentStyleIndex + 1) % stylesAndColors.length;
    updateColorIndexForNewStyle(stylesAndColors[nextStyleIndex].number);
    setCurrentStyleIndex(nextStyleIndex);
  };

  const goToPreviousStyle = () => {
    const prevStyleIndex =
      (currentStyleIndex - 1 + stylesAndColors.length) % stylesAndColors.length;
    updateColorIndexForNewStyle(stylesAndColors[prevStyleIndex].number);
    setCurrentStyleIndex(prevStyleIndex);
  };
  const goToNextColor = () => {
    const currentStyle = stylesAndColors[currentStyleIndex];
    const colors = currentStyle.colors;
    setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
  };

  const goToPreviousColor = () => {
    const currentStyle = stylesAndColors[currentStyleIndex];
    const colors = currentStyle.colors;
    setCurrentColorIndex(
      prevIndex => (prevIndex - 1 + colors.length) % colors.length,
    );
  };

  return (
    <Switcher>
      <SwitcherContentWrapper>
        <Feauture>{feature}</Feauture>
        <PickerBox>
          <SwitcherButton onClick={goToPreviousStyle} direction="prev" />
          <div>
            <span>
              {stylesAndColors[currentStyleIndex] &&
              stylesAndColors[currentStyleIndex].title
                ? stylesAndColors[currentStyleIndex].title
                : 'Default Title'}
            </span>
          </div>
          <SwitcherButton onClick={goToNextStyle} direction="next" />
        </PickerBox>
        <PickerBox>
          <SwitcherButton onClick={goToPreviousColor} direction="prev" />
          <div>
            <span>
              {stylesAndColors[currentStyleIndex] &&
              stylesAndColors[currentStyleIndex].colors
                ? stylesAndColors[currentStyleIndex].colors[currentColorIndex]
                : 'Default color'}
            </span>
          </div>
          <SwitcherButton onClick={goToNextColor} direction="next" />
        </PickerBox>
      </SwitcherContentWrapper>
    </Switcher>
  );
};
export const Feauture = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

export const Switcher = styled.div`
  z-index: 1000;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.card},
    ${({ theme }) => theme.primaryLight}
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Basic box shadow */
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  height: 100%;
  @media (max-width: 1051px) {
    padding: 1rem;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
`;
export const SwitcherContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const PickerBox = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  padding: 2px;
  border-radius: 1rem;
  justify-content: space-between;
`;
