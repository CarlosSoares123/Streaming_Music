import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
const Polylon = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  clip-path: polygon(0 0, 35% 100%, 100% 32%);
  background-color: rgba(64, 68, 237, 0.5);
`
const Circle = styled.div`
  position: absolute;
  clip-path: circle();
  background-color: rgba(64, 68, 237, 0.5);
`


export const FigureBg = () => {
  return(
    <Container>
      <Polylon style={{right: '-80px',bottom: '-80px'}}/>
      <Polylon style={{right: '-20px',bottom: '-20px'}}/>
      <Polylon style={{right: '20px',bottom: '20px'}}/>
      <Polylon style={{top: '20px', left: '400px', width: '100px', height: '100px'}}/>
      <Polylon style={{top: '20px', left: '400px', width: '100px', height: '100px'}}/>

      <Circle style={{top: '30px', left: '-400px', width: '600px', height: '600px'}}/>
      <Circle style={{top: '50px', right: '200px', width: '100px', height: '100px'}}/>
      <Circle style={{top: '80px', right: '230px', width: '100px', height: '100px'}}/>
      <Circle style={{bottom: '10px', right: '900px', width: '100px', height: '100px'}}/>
    </Container>
  )
}