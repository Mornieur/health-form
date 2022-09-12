import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  width:100%;
  height:100%;

  scrollbar-width: thin;
  overflow: auto;
}

html {
  background-color: #dddddd;
}


  scroll-behavior: smooth;
  overflow-x: hidden;

  


:root {

  height: 100%;

  // White Colors

  --black: #000;
  --white: #fff;
  --white-100: #f8f8f8;

  // Grey Colors 
  
  
  --grey-100: #dddddd;
  --grey-400: #8a8a8a;
  --grey-500: #797979;
  --grey-800: #4b4b4b;

  --grey-boxShadow: #c2c2c2;
  --grey-p: #6e6d6d;

  // Yellow Colors

  --yellow-500: #ffd706;
  --yellow-600: #fdd100;



  // Blue Colors

  --blue-50: #c8e1ff;

  --blue-300: #00a7ff;

  --blue-light: #65a1d3;

  --blue-dark: #2a4999;

  --blueTwo-light: #b3dcff;


  --name-blue: #1f9aff;

  --blue-background: #f6faff;

--blue-card: #f6faff;


  // Pink Colors

  --pink-300: #F9778D;

  // font weight

  --regular: 400;
  --medium: 500;
  --semiBold: 600;
}
`;
