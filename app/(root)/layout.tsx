import React, { ReactNode } from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider'

/* 
-This renders all pages from home route group and meeting id page 
-Root layout.tsx calls/recognize video client from 
StreamVideoProvider component and connects it to specific user
*/

const RootLayout = ({ children }: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout