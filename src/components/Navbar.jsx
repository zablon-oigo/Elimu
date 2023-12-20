
import {Link} from 'react-scroll'
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

export default function Navbar(){
    const[menu,setMenu]=useState(false)
    const handleChange=()=>{
      
        setMenu(!menu)
    }
    return (
        <>
        <div className="relative flex flex-row items-center justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="">
                <Link to="/" className='font-semibold text-2xl p-1 cursor-pointer'>
                    Elimu
                </Link>
            </div>
            <div className="md:flex hidden gap-5 font-medium p-1 cursor-pointer">
               <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-lg  font-light transition-all'>Home</Link>
               <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-lg  font-light transition-all'>About</Link>
               <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-lg  font-light transition-all'>Courses</Link>
               <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-lg  font-light transition-all'>Reviews</Link>
               <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-lg  font-light transition-all'>Contact</Link>

            </div>
            <div className="md:hidden block" onClick={handleChange} >
            <CiMenuFries size={30} className='cursor-pointer'/>
            </div>
            <div className={`${menu? 'translate-x-0':'-translate-x-full'} md:hidden flex items-center  justify-center flex-col gap-5 font-medium  text-white   bg-black bg-opacity-60 min-h-screen cursor-pointer top-[72px] left-0 absolute w-full  transition-transform  duration-500`}>
            <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-4xl  font-light transition-all'>Home</Link>
               <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-4xl  font-light transition-all'>About</Link>
               <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-4xl  font-light transition-all'>Courses</Link>
               <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-4xl  font-light transition-all'>Reviews</Link>
               <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-4xl  font-light transition-all'>Contact</Link>
                          
            </div>
        </div>
    
        </>
    )
}