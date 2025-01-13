import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'
function Navbar() {
  const[nav,setnav]=useState(false)
  const handleNav=()=>{setnav(!nav)}
  const navLink = [{
    id:1,
    link:'Home',
  },
  {
    id:2,
    link:'About',

  },
  {
    id:3,
    link:'Skills',
  },
  
  {
    id:4,
    link:'Project',
  
    },
    {
      id:6,
      link:"Experince"
    },
{
  id:7,
  link:"Certificates"
},
{
  id:8,
  link:"Services"
},
  
  {
    id:9,
    link:'Contact',

  },
]


  
  
  return (
   
  
<>
<div className='fixed bg-neutral-700 text-white h-16  w-full flex justify-around items-center z-50'>
  <h1 className='text-4xl bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent font-semibold '> Aurpit</h1>
  <ul className="hidden md:flex text-xl font-cursive  cursor-pointer">
  {navLink.map(({id,link})=>(
  <li key={id}className='text-lg px-6'> <Link to={link} smooth duration={100}>{link}</Link> </li>

  ))
    }
  </ul>
    <div onClick={handleNav} className='block  md:hidden  absolute right-4  top-3.5    '>
    {nav ? <AiOutlineClose size={30} />:<AiOutlineMenu size={30}/>}
  </div>
<div className={nav ? ' flex md:hidden  absolute font-cursive   right-0 top-16  bg-neutral-900 w-full ease-in-out duration-1000':'fixed right-[-200%]'}>
  <ul className=" p-8 text-xl">
  {navLink.map(({id,link})=>(
  <li key={id}className='py-2 ' > <Link to={link} smooth duration={800} onClick={handleNav}>{link}</Link></li>

  ))
    }
  </ul>
</div>
</div>


</>
  )
}

export default Navbar
