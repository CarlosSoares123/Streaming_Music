import styled from "styled-components";


export const Container = styled.div`
  width: 81.5vw;
  height: 100%;
  color: #fff;
  overflow: scroll;
  overflow-x: hidden;
  

  &::-webkit-scrollbar {
  width: 10px;
}
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    cursor: pointer;
}
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
}
`

