
export const About = () => {
    return (
        <div className="w-full"  id="about">
            <div className="bg-[#212529] flex items-center flex-col relative font-poppins w-full  text-white lg:h-[100vh] justify-center">
                <div className="relative mb-5 py-7">
                    <h1 className="font-bold text-8xl text-[#353535]">ABOUT ME</h1>
                    <h3 className="left-16 absolute top-12 text-4xl">Know Me More</h3>
                </div>
                <div className="flex justify-between md:py-12 md:gap-16  px-24 flex-col lg:flex-row  w-full">
                    <div className="lg:w-[55%] flex flex-col text-[15px] lg:text-lg">
                        <h2 className=" md:text-4xl text-xl font-semibold">
                            I'm&nbsp;
                            <span className="text-[#7D8C3B]">Solange~D~Ihirwe,&nbsp;</span>a
                            front end developer
                        </h2>
                        <p className="text-gray-400">
                            I'm passionate about using interactive user interfaces to create
                            engaging and strengthen a company's brand image.
                        </p>
                        <p className="text-gray-400">
                            I'm always eager to collaborate on projects that challenge me to
                            create new and engaging user experiences. Do you have an interactive
                            idea in mind?
                        </p>
                    </div>
                    <div className="lg:w-[40%] flex gap-4 flex-col md:text-md text-gray-200 items-start w-full text-sm lg:text-xl">
                        <div className="flex py-2 border-b border-gray-500">
                            <label htmlFor="name">Name: </label>
                            <p>&nbsp;&nbsp;Solange DUHIMBAZE Ihirwe</p>
                        </div>
                        <div className="flex py-2 border-b border-gray-500">
                            <label htmlFor="email">Email: </label>
                            <p className="text-[#7D8C3B] font-medium">
                                &nbsp;&nbsp;solangeihirwe@gmail.com
                            </p>
                        </div>
                        <div className="flex py-2 border-b border-gray-500">
                            <label htmlFor="from">From: </label>
                            <p>&nbsp;&nbsp;Kigali, Rwanda</p>
                        </div>
                        <button
                            className="px-6 py-3 bg-[#7D8C3B] text-xl font-[500] rounded-3xl mt-4"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
