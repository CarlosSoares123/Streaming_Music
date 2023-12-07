import styled from "styled-components";


export const Form = styled.form`
  width: 350px;
  padding: 15px; 
  margin-left: 25px;
  border-radius: 15px;
  text-align: center;
  display: grid;
  gap: 20px;

  h2{
    color: #fff;
    font-size: 40px;
    font-weight: 700;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  span{
    color: #fff;
  }
`
export const Input = styled.input`
  color: #fff;
  border-bottom: 1px solid #fff;
  font-size: 18px;
  padding: 5px;
  outline: none;
`
export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 8px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--color-focus);
  transition: .4s ease;

  &:hover{
    color: #fff;
  }
`