import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/sslogo.svg"
            width={27}
            height={27}
            alt="Logo"
          />
          <p className="nav-logo">
            Smart<span className="text-vibrant-coral">Shoppers</span>
          </p>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar                                                                                                                           