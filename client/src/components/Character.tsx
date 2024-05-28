import React from 'react';
import { useStyleColor } from '../contexts/styleColorContext';
import { ImageComponent } from './ImageComponent';

const Character: React.FC = () => {
  const {
    hairstyle,
    eyestyle,
    topstyle,
    bottomstyle,
    eyebrowstyle,
    upperbodystyle,
    lowerbodystyle,
    lipstyle,
  } = useStyleColor();

  const imageComponents = [
    {
      style: hairstyle.style,
      color: hairstyle.color,
      part: 'hair',
      zindex: 9,
      front: hairstyle.front,
    },
    { style: eyestyle.style, color: eyestyle.color, part: 'eyes', zindex: 20 },
    {
      style: eyebrowstyle.style,
      color: eyebrowstyle.color,
      part: 'eyebrows',
      zindex: 7,
    },
    { style: lipstyle.style, color: lipstyle.color, part: 'lips', zindex: 7 },
    { style: topstyle.style, color: topstyle.color, part: 'top', zindex: 21 },
    {
      style: bottomstyle.style,
      color: bottomstyle.color,
      part: 'bottoms',
      zindex: 11,
    },
    {
      style: upperbodystyle.style,
      color: upperbodystyle.color,
      part: 'upperbody',
      zindex: 12,
    },
    {
      style: lowerbodystyle.style,
      color: lowerbodystyle.color,
      part: 'lowerbody',
      zindex: 10,
    },
    {
      style: upperbodystyle.style,
      color: upperbodystyle.color,
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
