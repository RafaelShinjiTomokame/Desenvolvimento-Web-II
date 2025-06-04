import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ darkMode: boolean }>`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ darkMode }) => (darkMode ? '#121212' : '#f5f5f5')};
    color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
    transition: all 0.3s ease;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;