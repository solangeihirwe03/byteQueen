import { NavBar } from "./Sidebar";
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ReactNode, FC } from "react";
import { TbMenu } from "react-icons/tb";

interface ResponsiveNavbarProps {
    to: string;
    children: ReactNode;
}

export const ResponsiveNavbar: FC<ResponsiveNavbarProps> = ({ to, children }) => {
    const [open, setOpen] = useState(false);

    const toogleNavbar = () => {
        setOpen(!open);
    }
    return (
        <div className="bg-black text-white h-[70vh] w-full md:hidden">
            <NavLink to={to} onClick={toogleNavbar}>
                {open ? null : <AiOutlineClose />}
                {children}
            </NavLink>
            {open && (
          <div
            onClick={toogleNavbar}
            className="text-3xl absolute right-8 cursor-pointer md:hidden"
          >
            <TbMenu className="absolute" />
          </div>
        )}
            {open||(
                <div>
                    <NavBar />
                </div>
                )}
        </div>
    )
}

// import { useState } from "react";
// import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";


// export const responsive = () => {
//     // const [isOpen, setIsOpen] = useState(false);




//   return (
//     <div className="md:hidden flex">
//         <NavBar/>
//     </div>
//   )
// }

