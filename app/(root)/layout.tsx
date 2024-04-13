import React, { ReactNode } from 'react'

/* This renders all pages from home route group and meeting id page */

const RootLayout = ({ children }: {children: ReactNode}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default RootLayout