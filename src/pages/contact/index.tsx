import React from 'react'
import Topbar from '@/components/topbar/topbar'
import Mainimg from '@/components/contact/mainimg'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function index() {
  return (
    <main>
       <Topbar/>
       <Mainimg/>
       <Contact/>
       <Footer/>
    </main>
  )
}

export default index