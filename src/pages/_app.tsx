import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SettingsProvider from '@/context/setting-context'

export default function App({ Component, pageProps }: AppProps) {
  return(
    
      <Component {...pageProps} />
    
  ) 
  
}
