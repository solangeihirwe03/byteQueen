import { useState, useEffect } from "react"
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";

export const SocialMdIcn = () => {
    return (
        <div className="flex gap-2 text-gray-300 py-6 absolute right-20 md:relative md:right-2">
            <a href="https://www.instagram.com/__ihirwe___14/" target="_blank">
                <FaInstagram fontSize={24} />
            </a>
            <a href="https://github.com/solangeihirwe03" about="_blank">
                <FaGithub fontSize={24} />
            </a>
            <a href="https://x.com/IhirweSolange" target="_blank">
                <SlSocialTwitter fontSize={24} />
            </a>
            <a href="https://www.pinterest.com/ihirwesolange/" target="_blank">
                <TbBrandPinterest fontSize={24} />
            </a>
            <a href="https://www.linkedin.com/in/solangeihirwe/" target="_blank">
                <FaLinkedinIn fontSize={24} />
            </a>
        </div>
    )
}

export const Header = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = ()=>{
      const offSet = window.scrollY
  
      if(offSet > 300){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
  
    useEffect(()=>{
      window.addEventListener("scroll", handleScroll)
  
      return ()=>{
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])


    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <div className={`fixed drop-shadow-lg text-white font-medium top-0 left-0 w-full text-grey-500  flex justify-between md:items-center z-40 text-xl px-8 ${isScrolled ? "bg-black" : "bg-none"}`}>
            <h1 className="py-3 px-2 text-3xl">I<span className="text-[#F4A169]">~</span>Solange</h1>
            <div>
                <ul className={`flex flex-col md:flex-row gap-6 items-center text-white md:text-2xl transition duration-400 justify-center py-5 w-full ${isOpen ? "block" : "hidden"}`}
                    onClick={handleLinkClick}>
                    <li className={`hover:text-[#F4A169]`}>
                        <a href="/#home">Home</a>
                    </li>
                    <li className={`hover:text-[#F4A169]`}>
                        <a href="/#about" >About Me</a>
                    </li>
                    <li className={`hover:text-[#F4A169] `}>
                        <a href="/#services">Services</a>
                    </li>
                    <li className={`hover:text-[#F4A169] `}>
                        <a href="/#resume">Resume</a>
                    </li>
                    <li className={`hover:text-[#F4A169] `}>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li className={`hover:text-[#F4A169]`}>
                        <a href="/#contact">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
