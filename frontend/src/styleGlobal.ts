import { createGlobalStyle } from "styled-components";


export const StyleGlobal = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


:root{

  //Color
  --color-base: #fff;
  --color-bg: #121212;
  --color-text: #918a8a;
  --color-focus: #973cbf;
  

  // Font-Size
  --fs-title: 40px;
  --fs-text: 18px;

  //font-Weight
  --fw-title: 700;

}

body{
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: sans-serif;
}

a{
  text-decoration: none;
  cursor: pointer;
  color: var(--color-base);
}

button, input {
  background: transparent;
  border: none;
  cursor: pointer;
}

section{
  padding-inline: 35px;
  padding-block: 30px;
}

li{
  list-style: none;
}

`