import styled from "styled-components";

export const Menu = styled.div`
  grid-area: navbar;
  width: 250px;
  border-right: 1px solid #999;
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const Logotipo = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--color-focus);


  font-size: 30px;
  font-weight: 700;

`
export const Logo = styled.figure`
    padding: 10px;
    clip-path: circle();
    background-color: var(--color-focus);
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Item = styled.li`
  border-bottom: 1px solid #999;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
  transition: .4s ease;
  
  &:hover {
    background-color: #39393B;
    border-radius: 10px;
    border: none;
    
    a{
    color: var(--color-focus);
    }
  }
`