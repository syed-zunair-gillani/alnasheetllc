import Image from 'next/image'
import Main from '../components/main/main'
import Block from '../components/block/block'
import Services from '../components/servies/servicescard'
import Strategies from '../components/Strategies/Strategies'
import Blogcard from '../components/blog/blogcard'
import Logo from '../components/logo/logo'
import Testimonials from '../components/testimonials/Testimonials'



export default function Home() {
  return (
    <>
      <Main />
      <Block />
      <Services />
      <Strategies />
      <Blogcard />
      <Testimonials />
      <Logo />
    </>
  )
}
