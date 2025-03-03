import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children} {/* This will render the passed children */}
    </>
  )
}

export default Layout
