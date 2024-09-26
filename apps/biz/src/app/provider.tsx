'use client'

import { MuiThemeProvider } from '@pims-frontend/ui/components/providers/MuiThemeProvider'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import type { PropsWithChildren } from 'react'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import { type AppStore, makeStore } from '../lib/store'

const ReduxProvider = (props: PropsWithChildren) => {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{props.children}</Provider>
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

const MuiThemeProviderWrapper = (props: PropsWithChildren) => {
  const { theme } = useTheme()
  return <MuiThemeProvider mode={theme}>{props.children}</MuiThemeProvider>
}

const Providers = (props: PropsWithChildren) => {
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
