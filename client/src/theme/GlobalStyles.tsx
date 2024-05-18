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
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
     transition: all 0.30s linear;
}
input {
    background: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
}
button {
    background: ${({ theme }) => theme.button};
    padding: .5rem 1rem;
    font-weight:bold;
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    
    &:hover {
       cursor: pointer;
       background: ${({ theme }) => theme.primaryLight};
    }
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
`;
