import LandingPage from "../components/LandingPage";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";


export const Home = () => {
    return (
        <div className='text-white w-full 'id="home">
            <div className="flex flex-col items-center justify-center bg-black w-full">
                <LandingPage />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}
