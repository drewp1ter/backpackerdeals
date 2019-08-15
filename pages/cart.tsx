import React from 'react'
import { Helmet } from 'react-helmet'

import { CartLayout } from 'features/cart/components'
import { Page } from 'features/page/components'

const Cart = () => (
  <Page headerTheme="dark">
    <Helmet>
      <title>Cart</title>
    </Helmet>
    <CartLayout />
  </Page>
)

export default Cart
