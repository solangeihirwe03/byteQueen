import { useState } from "react"
import {useLocation} from "react-router-dom"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";
import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";

export const SocialMdIcn = ()=>{
    return(
      <div className="flex gap-2 text-gray-300 py-6 absolute right-20 md:relative md:right-2">
          <FaInstagram fontSize={24} />
          <FaFacebookF fontSize={24} />
          <SlSocialTwitter fontSize={24} />
          <TbBrandPinterest fontSize={24} />
          <FaLinkedinIn fontSize={24} />
        </div>
    )
  }

export const Header = () => {
    const { pathname } = useLocation()
    let subpage = pathname.split("/")?.[1]
    const [isOpen, setIsOpen] = useState(true)

  const toogleMenu = ()=>{
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false);
  };
    return (
        <div className="fixed drop-shadow-lg text-white font-medium top-0 left-0 w-full text-grey-500  flex justify-between md:items-center z-40 text-xl bg-black">
            <h1 className="py-3 px-2">Solange</h1>
            <div>
                <ul className={`flex flex-col md:flex-row gap-6 items-center text-white md:text-2xl transition duration-400 justify-center py-5 w-full ${isOpen ? "block" : "hidden"}`} 
                onClick={handleLinkClick}>
                    <li className={`hover:text-[#7D8C3B] ${subpage === "" ? "" : "text-white"}`}>
                        <a href="/#home">Home</a>
                    </li>
                    <li className={`hover:text-[#7D8C3B] ${subpage === "#about" ? "text-[#7D8C3B]" : "text-white"}`}>
                        <a href="/#about" >About Me</a>
                    </li>
                    <li className={`hover:text-[#7D8C3B] ${subpage === "#services" ? "text-[#7D8C3B]" : "text-white"}`}>
                        <a href="/#services">Services</a>
                    </li>
                    <li className={`hover:text-[#7D8C3B] ${subpage === "resume" ? "text-[#7D8C3B]" : "text-white"}`}>
                        <a href="/#resume">Resume</a>
                    </li>
                    <li className={`hover:text-[#7D8C3B] ${subpage === "projects" ? "text-[#7D8C3B]" : "text-white"}`}>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li className={`hover:text-[#7D8C3B] ${subpage === "contact" ? "text-[#7D8C3B]" : "text-white"}`}>
                        <a href="/#contact">Contacts</a>
                    </li>
                </ul>
            </div> 
            <div >
        <button onClick={toogleMenu} className="focus:outline-none md:hidden px-6 py-3">
          {isOpen ? <RiMenu2Line/> : <RiMenu3Fill/>}
        </button>
       </div>
            <div className="hidden md:flex">
                <SocialMdIcn />
            </div>
        </div>
    )
}
