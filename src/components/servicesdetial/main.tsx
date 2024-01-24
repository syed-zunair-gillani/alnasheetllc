import React from 'react'
import Link from 'next/link'
function main() {
  return (
    <section>
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url("/unit.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center conatiner mx-auto px-4">
          <h1 className="text-4xl font-bold">Service Detail</h1>
          <div className='flex gap-2'>
            <Link href="/" className="text-blue-400">Home</Link>
            <h5>/ Service Detail</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default main