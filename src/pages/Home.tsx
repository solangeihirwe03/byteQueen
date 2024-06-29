import LandingPage from "../components/LandingPage";
import { NavBar, Sidebar } from "../components/Sidebar";
import { About } from "./About";
import { Services } from "./Services";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
// import { ResponsiveNavbar } from "../components/ResponsiveNavbar";

export const Home = () => {
    return (
        <div className='text-white w-full '>
            <div className="right-20 top-12 relative">
                <div className="absolute">
                {/* <ResponsiveNavbar>
                    <NavBar/>
                </ResponsiveNavbar> */}
                </div>
            </div>
            <Sidebar />
            <div className="flex flex-col items-center justify-center bg-black w-full">
                <LandingPage />
                <About />
                <Services />
                <Resume />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}
