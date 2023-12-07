import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border-bottom: 1px solid #999;
`
export const ButtonsEnter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ButtonLink = styled.button`
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 700;
  transition: .4s;
  
  a{
    color: var(--color-bg);
  }
  &:hover{
    background-color: var(--color-focus);
    letter-spacing: 2px;
    
    a{
      color: #fff;
    }
  }
`
export const LogoutButton = styled.button`
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 700;
  transition: .4s;
  color: var(--color-bg);

  &:hover{
    background-color: var(--color-focus);
    letter-spacing: 2px;
    color: #fff;
  }
`
