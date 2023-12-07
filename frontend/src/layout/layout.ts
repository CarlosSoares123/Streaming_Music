import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-areas:  "navbar body" 
                        "player player";
  grid-template-rows: 85% 15%;
  overflow: hidden;
`


export const Content = styled.div`
  grid-area: body;
  overflow: hidden;
  padding-bottom: 50px;

`

export const Header = styled.div`

`



