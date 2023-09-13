import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {

// Adding an Array of links instead of making a long list for the NavBar 

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 1,
            link: 'contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Oscar</h1>
        </div>

        <ul className='flex'>
            
        {/* // Whenever your looping an array the elements update based on the key in which we are adding below */}

        {links.map(({ id, link }) => (
            <li 
                key={id} 
                className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>

                {link}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default NavBar