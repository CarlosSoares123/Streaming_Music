import * as F from './figure.ts'

interface Props{
  img: string
}

export const Figure:React.FC<Props> = ({img}) => {
  return(
    <F.Figure>
      <img src={img} alt="" />
    </F.Figure>
  )
}