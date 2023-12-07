import * as I from './input.ts'

interface Props {
  type: string,
  name: string,
  value: string,
  placeholder: string
}


export const Input:React.FC<Props> = ({type, name, value, placeholder}) => {
  return(
    <I.Input
      type={type} 
      name={name} 
      value={value}
      placeholder={placeholder}/>
  )
}

