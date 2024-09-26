import '@pims-frontend/ui/styles/globals.css'

import { Toaster } from '@pims-frontend/ui/components/base/shadcn/toaster'

import Providers from './provider'

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
export default RootLayout
