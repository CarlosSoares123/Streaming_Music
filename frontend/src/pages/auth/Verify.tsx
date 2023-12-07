import * as A from './auth.ts'

import { FigureBg } from './components/figureBg.tsx'

import  Img  from '/auth/otp.svg'
import { Figure } from './components/figure/figure.tsx'

export const Verify = () => {
  return(
    <A.ContainerVerify>
      <A.Container>
      <A.Content>
        <A.FormVerify>
          <A.Header>
            <A.Title>Enter OTP</A.Title>
            <A.Paragraph>Send OTP on <span>carlossoarespedro20@gmail.com</span></A.Paragraph>
          </A.Header>

          <A.OtpContainer>
            <A.OtpBox>
              <A.OtpInput type="text" maxLength={1}/>
            </A.OtpBox>

            <A.OtpBox>
              <A.OtpInput type="text" maxLength={1}/>
            </A.OtpBox>

            <A.OtpBox>
              <A.OtpInput type="text" maxLength={1}/>
            </A.OtpBox>

            <A.OtpBox>
              <A.OtpInput type="text" maxLength={1}/>
            </A.OtpBox>

            <A.OtpBox>
              <A.OtpInput type="text" maxLength={1}/>
            </A.OtpBox>

          </A.OtpContainer>
          <A.Button>Submit</A.Button>
        </A.FormVerify>
        <Figure img={Img}/>
      </A.Content>
      <FigureBg/>
    </A.Container>
    </A.ContainerVerify>
  )
}