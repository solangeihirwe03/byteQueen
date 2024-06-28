import { FaMapLocation, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandPinterest } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { Sidebar } from "../components/Sidebar";


export const Contact = () => {
    return (
        <div className="w-full flex">
            <div className="md:pr-44">
            <Sidebar />
            </div>
            <div className="bg-[#212529] w-full flex items-center flex-col justify-center relative font-poppins py-6 text-white md:h-[100vh] ">
                <div className="relative mb-5 py-7 ">
                    <h1 className="font-bold text-7xl text-[#353535]">CONTACT</h1>
                    <h3 className="left-24 absolute top-12 text-4xl">Get in Touch</h3>
                </div>
                <div className="flex gap-6 md:w-[80vw] md:pl-32 flex-col-reverse md:flex-row-reverse">
                    <div className="flex flex-col gap-6 md:w-[47%]">
                        <h2>ADDRESS</h2>
                        <p className="flex items-center">
                            <FaMapLocation fontSize={20} className="text-[#7D8C3B]" />{" "}
                            <span>&nbsp; Kigali/Rwanda</span>
                        </p>
                        <p className="flex items-center">
                            <FaPhone fontSize={20} className="text-[#7D8C3B]" />{" "}
                            <span>&nbsp; +2507113254</span>
                        </p>
                        <p className="flex items-center">
                            <FaEnvelope fontSize={20} className="text-[#7D8C3B]" />{" "}
                            <span>&nbsp; solangeduhimbazeihirwe@gmail.com</span>
                        </p>
                        <div className="pt-4">
                            <h1 className="text-xl font-semibold pb-3">FOLLOW ME</h1>
                            <div className="flex gap-2 text-gray-300 ">
                                <FaInstagram fontSize={24} />
                                <FaFacebookF fontSize={24} />
                                <SlSocialTwitter fontSize={24} />
                                <TbBrandPinterest fontSize={24} />
                                <FaLinkedinIn fontSize={24} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[47%] flex flex-col gap-5 ">
                        <h1>SEND US A CHAT</h1>
                        <form className="w-full flex flex-col gap-5 items-center">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-[#232a31] py-3 px-6 w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-[#232a31] py-3 px-6 w-full"
                            />
                            <textarea
                                placeholder="Tell us more about your needs...."
                                className="bg-[#232a31] py-3 px-6 w-full h-24"
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#7D8C3B] md:w-[15vw] rounded-3xl font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
