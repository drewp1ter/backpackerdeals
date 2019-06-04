import * as React from 'react'

import { Cookies, Footer, Header } from '../../components'

interface IProps {
  readonly children?: React.ReactNode
}

export const Page: React.FC<IProps> = ({ children }) => {
  const [cookies, setCookies] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (window) {
      if (window.localStorage.getItem('cookies')) {
        setCookies(true)
      }
    }
  })

  const handleCookies = () => {
    window.localStorage.setItem('cookies', 'true')
    setCookies(true)
  }

  return (
    <>
      {!cookies && <Cookies setCookies={handleCookies} />}
      <Header />
      {children}
      <Footer />
    </>
  )
}
