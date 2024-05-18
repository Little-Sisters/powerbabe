import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Define a function to get the image string based on style and color
const getImageString = (style: string, color: string, part: string): string => {
  // Construct the image string based on the style, color, and part
  return `./characters/${part}/${part}-${style}-${color}.png`;
};

const getHeadString = (color: string, part: string): string => {
  // Construct the image string based on the style, color, and part
  return `./characters/${part}/${part}-${color}.png`;
};

// Define the props interface for ImageComponent
interface ImageComponentProps {
  style?: string;
  color: string;
  part: string;
  front?: boolean;
  zindex?: number;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  style,
  color,
  part,
  front,
  zindex,
}) => {
  const [z, setzindex] = useState<number | undefined>(zindex);

  useEffect(() => {
    if (part === "hair" && front) {
      setzindex(1000);
    } else {
      setzindex(zindex);
    }
  }, [style, color, part, front]);

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
      $zindex={z}
    />
  );
};

const ImageBody = styled.img<{ $zindex?: number }>`
  position: absolute;
  scale: 97%;
  height: 100%;
  left: 50%;
  top: 0%;
  transform: translate(-50%);
  z-index: ${(props) => (props.$zindex ? props.$zindex : 20)};
  @media (max-width: 1050px) {
    scale: 100%;
    top: 0%;
  }
`;
