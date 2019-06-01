import React from 'react'

interface IProps {
  label: string
  description?: string
  children: React.ReactNode
}

export const Tab: React.FC<IProps> = ({ children }) => <>{children}</>