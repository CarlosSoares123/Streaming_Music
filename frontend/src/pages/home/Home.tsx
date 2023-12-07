import * as HS from './home.ts'

import { Layout } from '../../layout/Layout.tsx'
import { Albuns } from './components/albuns/albuns.tsx'

export const Home = () => {
  return (
    <Layout>
      <HS.Container>
        <Albuns/>
      </HS.Container>
    </Layout>
  )
}