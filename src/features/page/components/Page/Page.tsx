import * as React from 'react'
import { Cookies, Footer, Header } from '..'

interface IProps {
  readonly children?: React.ReactNode
  readonly headerTheme?: string
}

export const Page: React.FC<IProps> = ({ children, headerTheme }) => {
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
      <Header theme={headerTheme} />
      {children}
      <Footer />
    </>
  )
}
