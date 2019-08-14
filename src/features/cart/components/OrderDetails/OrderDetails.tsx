import React from 'react'

export interface IProps {
  readonly className?: string
}

export const OrderDetails: React.FC<IProps> = ({className}) => {

  return (
    <>
      <h1 className={className}>OrderDetails</h1>
    </>
  )
}
