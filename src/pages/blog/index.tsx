import React from 'react'
import Blogimg from '@/components/blogimg/blogimg'
import Topbar from '@/components/topbar/topbar'
import Footer from '@/components/footer/footer'
function index() {
  return (
    <main>
        <Topbar/>  
       <Blogimg/>
       <Footer/>
    </main>
  )
}

export default index