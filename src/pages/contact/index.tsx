import React from 'react'
import Topbar from '@/components/topbar/topbar'
import Mainimg from '@/components/contact/mainimg'
import ContactForm from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function Contact() {
  return (
    <main>
       <Topbar/>
       <Mainimg/>
       <ContactForm/>
       <Footer/>
    </main>
  )
}

export default Contact