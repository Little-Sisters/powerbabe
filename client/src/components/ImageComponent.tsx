import styled from "styled-components";

// Define a function to get the image string based on style and color
const getImageString = (style: string, color: string, part: string): string => {
  // Construct the image string based on the style, color, and part
  return `./characters/hair/${part}-${style}-${color}.png`;
};

// Define the props interface for ImageComponent
interface ImageComponentProps {
  style: string;
  color: string;
  part: string;
}


export const ImageComponent: React.FC<ImageComponentProps> = ({
  style,
  color,
  part,
}) => {
  const imageString = getImageString(style, color, part);

  return <ImageBody src={imageString} alt={`${style}-${color}-${part}`} />;
};

const ImageBody = styled.img`
  position: absolute;
`;

