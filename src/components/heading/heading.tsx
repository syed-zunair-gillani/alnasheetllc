import React from 'react'

const Heading = ({children}:any) => {
  return (
    <h2 className='text-3xl md:text-4xl font-semibold'>{children}</h2>
  )
}

export default Heading