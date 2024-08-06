// import { useEffect, useState } from "react";
// import Typed from "typed.js";

const LandingPage = () => {
 
  // useEffect(() => {
  //   const typing = new Typed("#home__title", {
  //     cursorChar: "",
  //     strings: [
  //       "I'm Solange~D~Ihirwe",
  //       "I'm a Freelancer"
  //     ],
  //     typeSpeed: 150,
  //     backSpeed: 80,
  //     loop: true
  //   });

  //   return () => typing.destroy();
  // }, []);

  return (
    <div className={`bg-myBackground w-full bg-center bg-cover h-[150vh] bg-no-repeat pt-56 px-10 `}>
      <div className="w-[40vw]">
        <h1 className="uppercase text-xl font-medium pb-6">Solange Ihirwe</h1>
        <p className="uppercase text-4xl font-semibold pb-6 leading-normal">
          I am a full stack developer specializing in front-end development.
        </p>
        <p className="text-xl pb-6">
          My mission is to design and develop a website that you and your audience love
        </p>

        <button className="px-20 py-3 bg-[#CA8455] text-2xl rounded-full font-medium">
          Get In Touch
        </button>
      </div>
    </div>

  );
}


export default LandingPage
