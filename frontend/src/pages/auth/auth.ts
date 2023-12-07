import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 4;
`
export const Content = styled.div`
  width: 800px;
  height: 500px;  
  background-color: #000;
  border-radius: 15px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  /* gap: 20px; */
  
`

// Login 
export const ButtonRemeber = styled.button`
  text-align: left;
  transition: .4s ease;
  font-size: 16px;

  a:hover{
    color: blue;
    cursor: pointer;
  }
`
export const ButtonRegister = styled.p`
  span{
    cursor: pointer;
  }
`

// Verify
export const ContainerVerify = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FormVerify = styled.div`
  width: 350px;
  padding: 15px;
  margin-inline: 20px;
  border-radius: 15px;
  display: grid;
  gap: 20px;
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;  
`
export const Title = styled.h2`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`
export const Paragraph = styled.div`

  span{
    color:  #8098F9;
  }
`


export const OtpContainer = styled.div`
  display: flex;
`
export const OtpBox = styled.div`  
  width: 40px;
  margin: 5px;
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const OtpInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  font-size: 18px;
  color: #fff;
`
export const Button = styled.button`
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