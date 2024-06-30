import { FaMapLocation, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandPinterest } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";


export const Contact = () => {
    return (
        <div className="w-full flex"id="contact">
            <div className="bg-[#212529] w-full flex items-center flex-col justify-center relative font-poppins py-6 text-white lg:h-[100vh] ">
                <div className="relative mb-5 py-7 w-full flex justify-center">
                    <h1 className="font-bold md:text-8xl text-6xl text-[#353535]">CONTACT</h1>
                    <h3 className="md:left-52 lg:left-[36rem] left-16 absolute top-16 md:text-4xl text-3xl lg:pl-28">Get in Touch</h3>
                </div>
                <div className="flex gap-6 px-24 flex-col-reverse lg:flex-row w-full">
                    <div className="flex flex-col gap-6 lg:w-[40%] w-full px-3 lg:text-xl">
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
                        <div className="pt-4 flex flex-col items-center md:items-start">
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
                    <div className="lg:w-[57%] flex flex-col gap-5 w-full">
                        <h1>SEND US A CHAT</h1>
                        <form className="w-full flex flex-col gap-5 items-center md:px-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-[#232a31] py-4 px-6 w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-[#232a31] py-4 px-6 w-full"
                            />
                            <textarea
                                placeholder="Tell us more about your needs...."
                                className="bg-[#232a31] py-4 px-6 w-full h-24"
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#7D8C3B] lg:w-[18vw] rounded-3xl font-medium text-xl"
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
