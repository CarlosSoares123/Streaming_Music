import { Link } from 'react-router-dom'
import * as M from './menu.ts'

import Logo from '/M.svg'

export const Menu = () => {
  return (
    <M.Menu>
        <M.Logotipo>
          <M.Logo>
            <img src={Logo} alt="" />
          </M.Logo>
          Music
        </M.Logotipo>

        <M.List>
          <M.Item>
            <Link to='/home'>Home</Link>
          </M.Item>
          <M.Item>
            <Link to='/myMusics'>My List</Link>
          </M.Item>
        </M.List>
      </M.Menu>
  )
}