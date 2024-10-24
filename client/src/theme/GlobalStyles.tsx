import { createGlobalStyle } from 'styled-components';

// This is the global style for the app
// Here you can add any css that you want to be applied to the whole app

export const GlobalStyles = createGlobalStyle`
*, *::before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
 body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  input {
    background: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.text};
  }

  // Primary Button Styles
  .btn-primary {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white || theme.text};
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primaryLight || theme.primary};
    }
  }

  // Secondary Button Styles
  .btn-secondary {
    background-color: ${({ theme }) => theme.secondary || theme.primary};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${({ theme }) => theme.secondaryLight || theme.secondary};
    }
  }

  // Optional: Additional styles for button variants
  .btn-primary-dark {
    background-color: ${({ theme }) => theme.primaryDark || theme.primary};
    color: ${({ theme }) => theme.white || theme.text};
  }
  .btn-secondary-dark {
    background-color: ${({ theme }) => theme.secondaryDark || theme.secondary};
    color: ${({ theme }) => theme.text};
  }
  
  // General Button Styles
 button {
   cursor: pointer;
    background: ${({ theme }) => theme.button};
    padding: .5rem 1rem;
    font-weight:bold;
    color: ${({ theme }) => theme.white};
    transition: all 0.30s linear;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    text-transform: uppercase;
    transition: all 0.30s linear; }
    font-size: 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    &:hover {
     background: ${({ theme }) => theme.ButtonHover};
   }
a {
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    text-decoration: none;

    &:hover {
      /* Hover styling */
      color: ${({ theme }) => theme.textHover};
      cursor: pointer;
    }
    }
footer {
    background: ${({ theme }) => theme.footer};
    transition: all 0.30s linear;
}
header {
    color:  ${({ theme }) => theme.white};
}
`;
