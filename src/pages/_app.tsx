import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SettingsProvider from '@/context/setting-context'

export default function App({ Component, pageProps }: AppProps) {
  return(
    
<<<<<<< HEAD
    <SettingsProvider>
    <Component {...pageProps} />
  </SettingsProvider>
=======
      <Component {...pageProps} />
>>>>>>> e0e7aef7de037fc8c79c75d28d5e7559a98452a1
    
  ) 
  
}
