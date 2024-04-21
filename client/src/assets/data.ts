export interface StylesAndColorsData {
  [key: string]: {
    colors: string[];
    pose?: number;
  }[];
}

export const skinColors: string[] = [
  "medium",
  "light",
  "dark",
  "darker",
  "yellow",
];

export const hairstyleData: StylesAndColorsData = {
  "1": [
    {
      colors: [
        "brown",
        "black",
        "blonde",
        "ginger",
        "green",
        "pink",
        "blue",
        "red",
      ],
    },
  ],
  "2": [
    {
      colors: [
        "brown",
        "black",
        "blonde",
        "ginger",
        "green",
        "pink",
        "blue",
        "red",
      ],
    },
  ],
  "3": [
    {
      colors: [
        "brown",
        "black",
        "blonde",
        "ginger",
        "green",
        "pink",
        "blue",
        "red",
      ],
    },
  ],
  "4": [
    {
      colors: [
        "brown",
        "black",
        "blonde",
        "ginger",
        "green",
        "pink",
        "blue",
        "red",
      ],
    },
  ],
};

export const eyestyleData: StylesAndColorsData = {
  "1": [{ colors: ["blue", "brown", "green"] }],
  "2": [{ colors: ["blue", "brown", "green"] }],
  "3": [{ colors: ["blue", "brown", "green"] }],
};

export const eyebrowstyleData: StylesAndColorsData = {
  "1": [{ colors: ["brown", "black", "blonde"] }],
  "2": [{ colors: ["brown", "black", "blonde"] }],
};

export const lipstyleData: StylesAndColorsData = {
  "1": [{ colors: ["burgundy", "hotpink", "red"] }],
  "2": [{ colors: ["burgundy", "hotpink", "red"] }],
  "3": [{ colors: ["burgundy", "hotpink", "red"] }],
};

export const topstyleData: StylesAndColorsData = {
  "1": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "pastelpink",
        "purple",
      ],
      pose: 1,
    },
  ],
  "2": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "pastelpink",
        "purple",
      ],
      pose: 2,
    },
  ],
  "3": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "pastelpink",
        "purple",
      ],
      pose: 1,
    },
  ],
  "4": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "pastelpink",
        "purple",
      ],
      pose: 2,
    },
  ],
};

export const bottomstyleData: StylesAndColorsData = {
  "1": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "purple",
      ],
      pose: 1,
    },
  ],
  "2": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "purple",
      ],
      pose: 1,
    },
  ],
  "3": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "purple",
      ],
      pose: 2,
    },
  ],
  "4": [
    {
      colors: [
        "blue",
        "green",
        "black",
        "yellow",
        "red",
        "hotpink",
        "purple",
      ],
      pose: 2,
    },
  ],
};
