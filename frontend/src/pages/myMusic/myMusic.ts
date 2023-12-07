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
export const Figure = styled.figure`
  width: 100%;
  height: 300px;
`

export const TabelaContainer = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  
`;
export const Cabecalho = styled.thead`
  
`;
export const LinhaCabecalho = styled.tr`
  
`;
export const CelulaCabecalho = styled.th`
  padding: 8px;
  text-align: left;
`;


export const CorpoTabela = styled.tbody`
`;

export const Linha = styled.tr`
  cursor: pointer;
  transition: all.4s ease;
  &:hover{
    background-color: #ddd;
  }
`;


export const CelulaPlay = styled.td`
  padding: 8px;
  text-align: left;
  word-wrap: break-word;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover{
    color: pink;
  }
`

export const Celula = styled.td`
  padding: 8px;
  text-align: left;
  word-wrap: break-word;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const Celula2 = styled.td`
  display: flex;
  gap: 10px; 

  img{
    width: 50px;
    height: 50px;
    padding: 5px; 
  }

  .text{
    display: grid;
  }
`

