import React from 'react'
import { Footer } from 'flowbite-react';
import Link from 'next/link';

const Footers = () => {
  return (
    <Footer container className='rounded-none bg-gradient-to-br from-bluexd to-cyan-600 font-primary ' >
      <Link href={'/'} className='text-amber-50 text-base font-semibold'> Copyright @ 2024</Link>
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default Footers