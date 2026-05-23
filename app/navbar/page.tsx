import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='gap-5 p-3 m-5 flex justify-center'>
           
         <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/products">Products</Link>
    <Link href="/products/webdev">Webdev</Link>
    </div>
    </>
  )
}

export default Navbar