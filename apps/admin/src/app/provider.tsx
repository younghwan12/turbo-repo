'use client'

import { MuiThemeProvider } from '@pims-frontend/ui/components/providers/MuiThemeProvider'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'
import { Provider } from 'react-redux'
import { type AppStore, makeStore } from '../lib/store'

const ReduxProvider = (props: React.PropsWithChildren) => {
  const storeRef = React.useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{props.children}</Provider>
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

const MuiThemeProviderWrapper = (props: React.PropsWithChildren) => {
  const { theme } = useTheme()
  return <MuiThemeProvider mode={theme}>{props.children}</MuiThemeProvider>
}

const Providers = (props: React.PropsWithChildren) => {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MuiThemeProviderWrapper>{props.children}</MuiThemeProviderWrapper>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default Providers
