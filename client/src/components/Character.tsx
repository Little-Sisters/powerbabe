import React from 'react';
import { useStyleColor } from '../contexts/styleColorContext';
import { ImageComponent } from './ImageComponent';

interface CharacterProps {
  showTemporary?: boolean; // Optional prop to determine which version to show
}

const Character: React.FC<CharacterProps> = ({ showTemporary = false }) => {
  const {
    hairstyle,
    eyestyle,
    topstyle,
    bottomstyle,
    eyebrowstyle,
    upperbodystyle,
    lowerbodystyle,
    lipstyle,

    // Temporary states
    temporaryHairstyle,
    temporaryEyestyle,
    temporaryTopstyle,
    temporaryBottomstyle,
    temporaryEyebrowstyle,
    temporaryUpperBodystyle,
    temporaryLowerBodystyle,
    temporaryLipstyle,
  } = useStyleColor();

  // Choose saved or temporary styles based on the `showTemporary` prop
  const currentHairstyle = showTemporary ? temporaryHairstyle : hairstyle;
  const currentEyestyle = showTemporary ? temporaryEyestyle : eyestyle;
  const currentTopstyle = showTemporary ? temporaryTopstyle : topstyle;
  const currentBottomstyle = showTemporary ? temporaryBottomstyle : bottomstyle;
  const currentEyebrowstyle = showTemporary
    ? temporaryEyebrowstyle
    : eyebrowstyle;
  const currentUpperBodystyle = showTemporary
    ? temporaryUpperBodystyle
    : upperbodystyle;
  const currentLowerBodystyle = showTemporary
    ? temporaryLowerBodystyle
    : lowerbodystyle;
  const currentLipstyle = showTemporary ? temporaryLipstyle : lipstyle;

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
