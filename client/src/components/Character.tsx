import React from 'react';
import { useStyleColor } from '../contexts/styleColorContext';
import { ImageComponent } from './ImageComponent';

interface CharacterProps {
  showTemporary?: boolean;
  isLoggedInCharacter?: boolean;
}

const Character: React.FC<CharacterProps> = ({
  showTemporary = false,
  isLoggedInCharacter = true,
}) => {
  const {
    hairstyle,
    eyestyle,
    topstyle,
    bottomstyle,
    eyebrowstyle,
    upperbodystyle,
    lowerbodystyle,
    lipstyle,
    temporaryHairstyle,
    temporaryEyestyle,
    temporaryTopstyle,
    temporaryBottomstyle,
    temporaryEyebrowstyle,
    temporaryUpperBodystyle,
    temporaryLowerBodystyle,
    temporaryLipstyle,
  } = useStyleColor();

  // Hardcoded styles for non-logged-in characters
  const defaultStyles = {
    hairstyle: { style: '3', color: 'black', front: false },
    eyestyle: { style: '7', color: 'blue' },
    eyebrowstyle: { style: '3', color: 'black' },
    lipstyle: { style: '2', color: 'brown' },
    topstyle: { style: '1', color: 'red' },
    bottomstyle: { style: '7', color: 'blue' },
    upperbodystyle: { style: '1', color: 'dark' },
    lowerbodystyle: { style: '3', color: 'dark' },
  };

  // Use saved or temporary styles for logged-in user, else use hardcoded styles
  const currentHairstyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryHairstyle
      : hairstyle
    : defaultStyles.hairstyle;
  const currentEyestyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryEyestyle
      : eyestyle
    : defaultStyles.eyestyle;
  const currentEyebrowstyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryEyebrowstyle
      : eyebrowstyle
    : defaultStyles.eyebrowstyle;
  const currentLipstyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryLipstyle
      : lipstyle
    : defaultStyles.lipstyle;
  const currentTopstyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryTopstyle
      : topstyle
    : defaultStyles.topstyle;
  const currentBottomstyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryBottomstyle
      : bottomstyle
    : defaultStyles.bottomstyle;
  const currentUpperBodystyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryUpperBodystyle
      : upperbodystyle
    : defaultStyles.upperbodystyle;
  const currentLowerBodystyle = isLoggedInCharacter
    ? showTemporary
      ? temporaryLowerBodystyle
      : lowerbodystyle
    : defaultStyles.lowerbodystyle;

  const imageComponents = [
    {
      style: currentHairstyle.style,
      color: currentHairstyle.color,
      part: 'hair',
      zindex: 9,
      front: currentHairstyle.front,
    },
    {
      style: currentEyestyle.style,
      color: currentEyestyle.color,
      part: 'eyes',
      zindex: 20,
    },
    {
      style: currentEyebrowstyle.style,
      color: currentEyebrowstyle.color,
      part: 'eyebrows',
      zindex: 7,
    },
    {
      style: currentLipstyle.style,
      color: currentLipstyle.color,
      part: 'lips',
      zindex: 7,
    },
    {
      style: currentTopstyle.style,
      color: currentTopstyle.color,
      part: 'top',
      zindex: 21,
    },
    {
      style: currentBottomstyle.style,
      color: currentBottomstyle.color,
      part: 'bottoms',
      zindex: 11,
    },
    {
      style: currentUpperBodystyle.style,
      color: currentUpperBodystyle.color,
      part: 'upperbody',
      zindex: 12,
    },
    {
      style: currentLowerBodystyle.style,
      color: currentLowerBodystyle.color,
      part: 'lowerbody',
      zindex: 10,
    },
    {
      style: currentUpperBodystyle.style,
      color: currentUpperBodystyle.color,
      part: 'head',
      zindex: 6,
    },
  ];

  return (
    <>
      {imageComponents.map((component, index) => (
        <ImageComponent
          key={index}
          style={component.style}
          color={component.color}
          part={component.part}
          zindex={component.zindex}
          front={component.front}
        />
      ))}
    </>
  );
};

export default Character;
