import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
