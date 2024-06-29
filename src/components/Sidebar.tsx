import {useLocation, NavLink} from "react-router-dom"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";

export const NavBar = ()=>{
    const {pathname} = useLocation()
    let subpage = pathname.split("/")?.[1]
    return(
        <ul className="flex flex-col gap-6 items-center text-white">
            <li className={`hover:text-[#7D8C3B] ${subpage === "" ? "text-[#7D8C3B]" : "text-white"}`}>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className={`hover:text-[#7D8C3B] ${subpage === "about" ? "text-[#7D8C3B]" : "text-white"}`}>
                <NavLink to={"/about"}>About Me</NavLink>
            </li>
            <li className={`hover:text-[#7D8C3B] ${subpage === "services" ? "text-[#7D8C3B]" : "text-white"}`}>
                <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className={`hover:text-[#7D8C3B] ${subpage === "resume" ? "text-[#7D8C3B]" : "text-white"}`}>
                <NavLink to={"/resume"}>Resume</NavLink>
            </li>
            <li className={`hover:text-[#7D8C3B] ${subpage === "projects" ? "text-[#7D8C3B]" : "text-white"}`}>
                <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li className={`hover:text-[#7D8C3B] ${subpage === "contact" ? "text-[#7D8C3B]" : "text-white"}`}>
                <NavLink to={"/contact"}>Contacts</NavLink>
            </li>
        </ul>
    )
}

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
export const Sidebar = () => {
  return (
    <div className="md:flex flex-col justify-between h-[100vh] bg-black px-12 text-xl font-semibold fixed z-10 items-center md:h-[115vh] lg:h-[100vh] lg:w-[20vw] hidden ">
      <div className="md:flex items-center flex-col lg:py-3 hidden">
        <img src="logo.png" alt="Logo" className="lg:w-[6rem] md:w-[4rem] rounded-full" />
        <h2>Solange~D~Ihirwe</h2>
      </div>
       <NavBar />
       <SocialMdIcn />
      
    </div>
  )
}
