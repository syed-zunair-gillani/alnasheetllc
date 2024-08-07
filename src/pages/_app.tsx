import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SettingsProvider from '@/context/setting-context'
import Topbar from '@/components/topbar/topbar'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Qoute from '@/components/models/model'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {

  return(
    <SettingsProvider>
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
      <Qoute />
      <Footer />
    </SettingsProvider>
  ) 
  
}
