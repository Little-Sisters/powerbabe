interface BodyImage {
  src: string;
  number: number;
}

type HeadImage = string; // Assuming HeadImage is just a string representing the image source

type BodyImages = {
  light: BodyImage[];
  medium: BodyImage[];
  tan: BodyImage[];
};

const lowerBodyArray: BodyImages = {
  light: [
    { src: "./characters/upperbody-1-medium.png", number: 1 },
    { src: "./characters/upperbody-2-medium.png", number: 2 },
  ],
  medium: [
    { src: "./characters/lowerbody-1-medium.png", number: 1 },
    { src: "./characters/lowerbody-2-medium.png", number: 2 },
  ],
  tan: [
    { src: "./characters/lowerbody-tan-1.png", number: 1 },
    { src: "./characters/lowerbody-tan-2.png", number: 2 },
  ],
};

const upperBodyArray: BodyImages = {
  light: [
    { src: "./characters/upperbody-1-medium.png", number: 1 },
    { src: "./characters/upperbody-2-medium.png", number: 2 },
  ],
  medium: [
    { src: "./characters/upperbody-1-medium.png", number: 1 },
    { src: "./characters/upperbody-2-medium.png", number: 2 },
  ],
  tan: [
    { src: "./characters/upperbody-1-medium.png", number: 1 },
    { src: "./characters/upperbody-2-medium.png", number: 2 },
  ],
};

const headArray: HeadImage[] = [
  "./characters/head-1.png",
  "./characters/head-2.png",
  "./characters/head-3.png",
];
