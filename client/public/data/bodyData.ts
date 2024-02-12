export interface BodyImage {
  src: string;
  number: number;
}

export type HeadImage = string; // Assuming HeadImage is just a string representing the image source

export type BodyImages = {
  yellow: BodyImage[];
  light: BodyImage[];
  medium: BodyImage[];
  dark: BodyImage[];
  darker: BodyImage[];
};

export const lowerBodyImages: BodyImages = {
  light: [
    { src: "./characters/body/upperbody-1-medium.png", number: 1 },
    { src: "./characters/body/upperbody-2-medium.png", number: 2 },
  ],
  medium: [
    { src: "./characters/body/lowerbody-1-medium.png", number: 1 },
    { src: "./characters/body/lowerbody-2-medium.png", number: 2 },
  ],
  dark: [
    { src: "./characters/body/lowerbody-1-dark.png", number: 1 },
    { src: "./characters/body/lowerbody-2-dark.png", number: 2 },
  ],
  yellow: [
    { src: "./characters/body/lowerbody-1-yellow.png", number: 1 },
    { src: "./characters/body/lowerbody-2-yellow.png", number: 2 },
  ],
  darker: [
    { src: "./characters/body/lowerbody-1-darker.png", number: 1 },
    { src: "./characters/body/lowerbody-2-darker.png", number: 2 },
  ],
};

export const upperBodyImages: BodyImages = {
  light: [
    { src: "./characters/body/upperbody-1-medium.png", number: 1 },
    { src: "./characters/body/upperbody-2-medium.png", number: 2 },
  ],
  medium: [
    { src: "./characters/body/upperbody-1-medium.png", number: 1 },
    { src: "./characters/body/upperbody-2-medium.png", number: 2 },
  ],
  dark: [
    { src: "./characters/body/upperbody-1-dark.png", number: 1 },
    { src: "./characters/body/upperbody-2-dark.png", number: 2 },
  ],
  yellow: [
    { src: "./characters/body/upperbody-1-yellow.png", number: 1 },
    { src: "./characters/body/upperbody-2-yellow.png", number: 2 },
  ],
  darker: [
    { src: "./characters/body/upperbody-1-darker.png", number: 1 },
    { src: "./characters/body/upperbody-2-darker.png", number: 2 },
  ],
};

export const headArray: HeadImage[] = [
  "./characters/body/head-medium.png",
  "./characters/body/head-dark.png",
  "./characters/body/head-darker.png",
  "./characters/body/head-light.png",
  "./characters/body/head-yellow.png",
];
