import Image from 'next/image'
import Topbar from '../components/topbar/topbar'
import Navbar from '@/components/navbar/navbar'
import Main from '../components/main/main'
import Block from '../components/block/block'
import Services from '../components/servies/servicescard'
import Strategies from '../components/Strategies/Strategies'
import Blogcard from '../components/blog/blogcard'
import Logo from '../components/logo/logo'
import Footer from '@/components/footer/footer'
import Testimonials from '../components/testimonials/Testimonials'



export default function Home() {
  return (

    <main>

      <Topbar />
      <Navbar />
      <Main />
      <Block />
      <Services />
      <Strategies />
      <Blogcard />
      <Testimonials />
      <Logo />
      <Footer />
    </main>
  )
}
