'use client'

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Categories from './Categories';

import { safeUser } from '@/app/types'


interface NavbarProps {
  currentuser? : safeUser | null;
}




const Navbar: React.FC<NavbarProps> =({currentuser
 
}) => {
 
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='
        py-4
        border-b-[1px]
        '
        >
            <Container>
                 <div
                 className='
                 flex
                 flex-row
                 items-center
                 justify-between
                 gap-3
                 md:gap-0

                 '
                 >
                  <Logo />
                  <Search />
                  <UserMenu currentUser= {currentuser} />
                 </div>
                
            </Container>

        </div>
        <Categories />
        
    </div>
    
  )
}

export default Navbar