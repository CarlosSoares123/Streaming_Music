import styled from "styled-components";

export const FormContainer = styled.div`
  width: 81.5vw;
  height: 100%;  
`
export const Intro = styled.div`
  margin-inline: 25px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2{
    color: #fff;
    font-size: 30px;
  }

  p{
    font-size: 18px;
    margin-bottom: 15px;
  }
`
export const Form = styled.form`
  width: fit-content;
  margin-left: 25px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Figure = styled.div`
  width: 275px;
  height: 275px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #999;
  position: relative;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -4;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`
export const Inputs = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 15px;
  
`
export const Box = styled.div`

`   
export const Label = styled.label`
  padding: 5px 15px;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;
  font-size: 18px;
  transition: all.4s ease;

  &:hover{
    color: #000;
    background-color: #fff;
  }
`
export const InputImg = styled.input`
  display: none;
`
export const Input = styled.input`
  color: #fff;
  border: 1px solid #fff;
  background-color: none;
  font-size: 18px;
  padding: 5px;
  outline: none;
`
export const Category = styled.div`
`
export const Select = styled.select`
  border: 1px solid #fff;
  background-color: transparent;
  color: var(--color-text);
  font-size: 18px;
  padding: 5px;
  outline: none;
`
export const Option = styled.option`
  color: #000;
`
export const Submit = styled.button`
  width: 100%;
  padding: 8px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  background-color: var(--color-focus);
  transition: .4s ease;

  &:hover{
    color: #fff;
  }
`