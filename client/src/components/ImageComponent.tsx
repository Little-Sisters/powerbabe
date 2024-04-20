import styled from "styled-components";
import React from "react";

// Define a function to get the image string based on style and color
const getImageString = (style: string, color: string, part: string): string => {
  // Construct the image string based on the style, color, and part
  return `./characters/${part}/${part}-${style}-${color}.png`;
};
const getHeadString = ( color: string, part: string): string => {
  // Construct the image string based on the style, color, and part
  return `./characters/${part}/${part}-${color}.png`;
};

// Define the props interface for ImageComponent
interface ImageComponentProps {
  style?: string;
  color: string;
  part: string;
  zIndex?: number;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  style,
  color,
  part,
  zIndex,
}) => {
  let imageString = "";

  switch (part) {
    case "head":
      imageString = getHeadString(color, part);
      break;
    default:
      imageString = getImageString(style!, color, part);
      break;
  }

  return (
    <ImageBody
      src={imageString}
      alt={`${style}-${color}-${part}`}
      zIndex={zIndex}
    />
  );
};

const ImageBody = styled.img<{ zIndex?: number }>`
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translate(-50%);
  z-index: ${(props) => (props.zIndex ? props.zIndex : 20)};
`;
