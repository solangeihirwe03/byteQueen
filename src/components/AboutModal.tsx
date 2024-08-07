import about from "../../public/about.jpg"
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaCaretRight } from "react-icons/fa";


const AboutModal = () => {

    const typedElement = useRef(null);
    useEffect(() => {
        if (typedElement.current) {
            const options = {
                strings: ["Designer", "Developer."],
                typeSpeed: 150,
                backSpeed: 80,
                loop: true,
            }

            const typed = new Typed(typedElement.current, options)

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <div className="w-full flex px-12 relative h-screen py-2">
            <div className="flex flex-col items-center border-dashed border-[#afafaf] border-r-2 justify-center w-1/3 absolute  ">
                <div className="flex flex-col justify-center gap-3 pb-10 w-full">
                    <img src={about} className="w-80 h-80 rounded-full" />
                    <h1 className="text-3xl uppercase font-medium ">solange <span className="text-[#CA8455]">ihirwe</span></h1>
                    <p className="text-3xl text-[#52525b] ">Creative <span className="font-medium text-white" ref={typedElement}></span></p>
                </div>
                <div className="w-full">
                    <p className="text-[#F4A169] flex gap-2 items-end border-[#afafaf] border-b-2 border-dashed py-2 mb-4 w-full">
                        <IoLocationSharp fontSize={30} />
                        <span className="text-white">Kigali/Rwanda</span>
                    </p>
                    <p className="text-[#F4A169] flex gap-2 items-end border-[#afafaf] border-b-2 border-dashed py-2 mb-4 w-full">
                        <IoCall fontSize={25} />
                        <span className="text-white">+250 787113254</span>
                    </p>
                    <p className="text-[#F4A169] flex gap-2 items-end border-[#afafaf] border-b-2 border-dashed py-2 mb-72 w-full ">
                        <CgMail fontSize={30} />
                        <span className="text-white">solangeduhimbazeihirwe@gmail</span>
                    </p>
                </div>
            </div>

            <div className="w-2/3 p-16 overflow-y-auto ml-[28rem] flex-1 no-scrollbar">
                <div className="pb-6">
                    <h1 className="text-2xl border-b-2 border-[#afafaf] border-dashed pb-6 mb-10">About &nbsp;
                        <span className="text-[#F4A169]">
                            Me
                        </span>
                    </h1>
                    <p className="text-md leading-relaxed pb-6 font-light">
                        Hello everybody! My name is Solange Duhimbaze Ihirwe. I am a graphic designer,
                        and I'm very passionate and dedicated to my work
                        by create engaging and strengthen a company's brand image.
                        Do you have an interactive idea in mind?
                    </p>

                </div>
                <div className="pb-6">
                    <h1 className="text-2xl pb-6">Quality &nbsp;
                        <span className="text-[#F4A169]">
                            Services
                        </span>
                    </h1>

                    <p className="flex gap-1 text-[#F4A169] pb-4">
                        <FaCaretRight fontSize={25} />
                        <span className="text-white">
                            Web Design
                        </span>
                    </p>
                    <p className="flex gap-1 text-[#F4A169] pb-4">
                        <FaCaretRight fontSize={25} />
                        <span className="text-white">
                            Web Development
                        </span>
                    </p>
                    <p className="flex gap-1 text-[#F4A169] pb-4">
                        <FaCaretRight fontSize={25} />
                        <span className="text-white">
                            UI/UX Design
                        </span>
                    </p>
                </div>

                <div className="pb-16">
                    <h1 className="text-2xl pb-6 ">Programming &nbsp;
                        <span className="text-[#F4A169]">
                            Skills
                        </span>
                    </h1>
                    <div className="flex flex-col gap-12">
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>React JS</p>
                                <p>80%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[80%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>HTML/CSS</p>
                                <p>90%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[90%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>Node JS</p>
                                <p>60%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[60%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>Tailwind CSS</p>
                                <p>75%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[70%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[80%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>TypeScript</p>
                                <p>75%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[75%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                        <div className="w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#3F3F46]">
                                <p>Git/GitHub</p>
                                <p>80%</p>
                            </div>
                            <div className="w-[40vw] h-1 bg-[#3F3F46]">
                                <div className="w-[80%] bg-[#F4A169] h-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl pb-6 ">Education &nbsp;
                        <span className="text-[#F4A169]">
                            Timeline
                        </span>
                    </h1>

                    <div className="border-l-2 border-[red] relative h-40">
                        <div className="absolute left-[-13px] top-10 w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="p-8 ml-16 flex gap-40 items-center">
                            <p className="px-4 py-2 rounded-full bg-[#1E1E1E] w-40 text-center h-10">2022-present</p>
                            <div>
                                <h1>University of Rwanda</h1>
                                <p>Bachelor degree</p>
                            </div>
                        </div>

                        <div className="absolute left-[-13px] top-28 w-6 h-6 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutModal
