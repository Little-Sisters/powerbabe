import 'styled-components';

// Defines theme interface and extends DefaultTheme
// This is used so that TypeScript knows what the theme object looks like and doesn't throw errors
export interface DefaultTheme {
  mode: string;
  body: string;
  bodyOpacity: string;
  bodyOpacity2: string;
  primary: string;
  primaryLight?: string; // Optional property, not all themes may use it
  primaryLighter?: string; // Optional property, not all themes may use it
  primaryDark?: string; // Optional property, not all themes may use it
  primaryDarker?: string; // Optional property, not all themes may use it
  secondary?: string; // Optional property, not all themes may use it
  secondaryLight?: string; // Optional property, not all themes may use it
  secondaryDark?: string; // Optional property, not all themes may use it
  text: string;
  textHover: string;
  input: string;
  card: string;
  background: string;
  button: string;
  buttonHover?: string; // Optional property, not all themes may use it
  menuHover: string;
  paper: string;
  footer: string;
  footerDetail: string;
  footerText: string;
  productOne: string;
  productTwo: string;
  black?: string; // Optional property, not all themes may use it
  white?: string; // Optional property, not all themes may use it
  overlay?: string; // Optional property, not all themes may use it
  overlay2?: string; // Optional property, not all themes may use it
}
