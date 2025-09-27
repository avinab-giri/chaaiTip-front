import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import SvgLogo from './svgLogo'

const Navbar = () => {
    return (
        <nav className='container mx-auto px-2'>
            <div className='flex items-center justify-between py-2'>
                <div className="logo">
                    <Link href={'/'}> <SvgLogo/> </Link>
                </div>
                <ul className="mainNav flex items-center gap-2">
                    <li><a href={process.env.NEXT_PUBLIC_LOGIN}><Button variant={'outline'}>Log in</Button></a></li>
                    <li><a href={process.env.NEXT_PUBLIC_SIGNUP}><Button>Sign up</Button></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar