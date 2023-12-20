import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="my-10">
            <div className="w-full bg-gray-200 p-14">
                <div className="flex md:flex-row flex-col items-center justify-between mb-4">
                    <div className="w-full md:w-2/5 mb-3">
                        <h2 className="text-2xl mb-4">Elimu</h2>
                        <p className="text-lg font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ab accusamus! Voluptatibus hic rem quas maiores similique ipsa expedita repellat? Libero, neque perspiciatis facilis ullam accusamus ipsam aspernatur autem possimus.
                        </p>
                    </div>
                        <div className="w-full md:w-1/5 mb-3">
                            <h2 className="text-2xl mb-4">Quick Links</h2>
                        <div className="cursor-pointer flex flex-col">
                                                
                                                <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-xl  font-light transition-all'>Home</Link>
                                                <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-xl  font-light transition-all'>About</Link>
                                                <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-xl  font-light transition-all'>Courses</Link>
                                                <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-xl  font-light transition-all'>Reviews</Link>
                                                <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-teal-500 text-xl  font-light transition-all'>Contact</Link>
                                
                                        
                                                    </div>
                        </div>
                    <div className="w-full md:w-1/5">
                        <div className="mb-4">
                        <h3 className="text-2xl ">Address</h3>
                                                <p className="text-lg font-light">
                                                    123 Main Street, Anytown, USA
                                                    <br />
                                                    Phone: (123) 456-7890
                                                    <br />
                                                    Email: 6gKp7@example.com

                                                </p>
                        </div>
                        <h3 className="text-2xl mb-4">Social</h3>
                        <div className="flex flex-row gap-6">
                        <FaFacebookF size={30} />
                        <IoLogoTwitter size={30}/>
                        <FaYoutube  size={30}/>
                        <FaInstagram size={30}/>
                        </div>
                    </div>
                </div>
                <p className="text-center font-light">Copyright © 2022 - 2023. All rights reserved.</p>
            </div>
            
        </footer>

    );
}