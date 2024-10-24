// These are the two modes that can be used in the app
// lightMode is the default mode
// darkMode is the mode that is used when the user switches to dark mode
// If you want to add a different color or mode you can add it here

export const pinkTheme = {
  mode: 'pink',
  text: 'black',
  primary: '#FF25E9',
  primaryLight: '#FF6BDF',
  primaryLighter: '#ff95e8',
  primaryDark: '#d827c6',
  primaryDarker: '#b30ea2',
  secondary: '#fcfe49',
  secondaryLight: '#f9fa79',
  secondaryDark: '#e4de27',
  input: '#FFFFFF',
  card: '#FFFFFF',
  background: '#fae2e7',
  button: '#FF13AF',
  buttonHover: '#FF13AF',
  black: '#FFFFFF',
  white: 'white',
  overlay: '#FFFFFF',
};

export const blackTheme = {
  mode: 'black',
  overlay: 'black',
  text: '#F4F4F4', // Light grey for readability
  primary: '#2F262A', // Darker pink (main color)
  primaryLight: '#4E3B43', // Slightly lighter pink
  primaryLighter: '#755461', // Even lighter pink
  primaryDark: '#231C1F', // Dark pink
  primaryDarker: '#181315', // Darker shade of dark pink
  secondary: '#585759', // Grey for secondary elements
  secondaryLight: '#6E6D6F', // Lighter grey
  secondaryDark: '#414041', // Darker grey
  input: '#2B2829', // Dark grey input background
  card: '#3A3638', // Dark grey for cards
  background: '#1E1C1D', // Almost black background
  button: '#7D2254', // Dark pink for buttons
  buttonHover: '#962C65', // Darker pink for button hover
  black: '#FFFFFF', // Text on dark backgrounds (white)
  white: '#F4F4F4', // Text on dark pink backgrounds (light grey)
};
