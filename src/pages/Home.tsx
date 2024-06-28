import LandingPage from "../components/LandingPage";
import { Sidebar } from "../components/Sidebar";
import { About } from "./About";
import { Services } from "./Services";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { ResponsiveNavbar } from "../components/ResponsiveNavbar";

export const Home = () => {
    return (
        <div className='text-white w-full'>
            <div className="absolute right-20 top-12">
                <ResponsiveNavbar />
            </div>
            <Sidebar />
            <div className="flex flex-col items-center justify-center bg-black">
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
