import { useEffect } from "react";
import { Link } from "react-router-dom"
import Typed from "typed.js";

const LandingPage = () => {
    useEffect(()=>{
    const typing = new Typed("#home__title",{
        cursorChar: "",
        strings: [
            "I'm Solange~D~Ihirwe",
            "I'm a Freelancer"
        ],
        typeSpeed:150,
        backSpeed:80,
        loop: true
    });

    return ()=>typing.destroy();
},[]);

  return (
    <div className="bg-myBackground bg-cover flex flex-col gap-5 text-xl items-center justify-center font-bold h-[100vh] relative w-full md:pl-44">
      <h2 className="text-4xl">Welcome</h2>
      <p className="lg:text-6xl md:text-3xl font-semibold" id="home__title"></p>
      <p className="md:text-2xl text-gray-400">based in Kigali, Rwanda</p>
      <Link to={""}className="md:py-2.5 px-5 border-[#7D8C3B] border-[2px] font-semibold text-[#7D8C3B] rounded-3xl">
        Hire me
      </Link>
    </div>
  );
}


export default LandingPage
