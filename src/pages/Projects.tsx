import { Sidebar } from "../components/Sidebar"

export const Projects = () => {
    return (
        <div className="w-full flex">
            <div className="md:pr-44">
            <Sidebar />
            </div>
            <div className="relative bg-[#343a40] flex items-center flex-col w-full text-white">
                <div className="relative mb-5 py-7 w-full md:pl-56 lg:pl-44">
                    <h1 className="font-bold md:text-7xl text-6xl text-[#4a4a4a]">PROJECTS</h1>
                    <h3 className="left-24 absolute top-12 text-4xl md:left-72">My Work</h3>
                </div>
                <div className="lg:w-[80vw] md:pl-32 flex flex-wrap gap-7 px-4">
                    <div className="lg:w-[30%] mb-20 border rounded-b-3xl w-full">
                        <img
                            src="myBrand.jpg"
                            alt="my-brand portfolio"
                            className="w-full lg:h-[40vh] brightness-60"
                        />
                        <h2 className="p-4">Design</h2>
                        <h3 className="px-4 pb-2">My brand Website</h3>
                    </div>

                    <div className="lg:w-[30%] mb-20 border rounded-b-3xl w-full">
                        <img
                            src="TailwindPort.jpg"
                            alt="my-brand portfolio"
                            className="w-full lg:h-[40vh] brightness-60"
                        />
                        <h2 className="p-4">Design</h2>
                        <h3 className="px-4 pb-2">Tailwind project</h3>
                    </div>

                    <div className="lg:w-[30%] mb-20 border rounded-b-3xl w-full">
                        <img
                            src="RockPaper.jpg"
                            alt="my-brand portfolio"
                            className="w-full lg:h-[40vh] brightness-60"
                        />
                        <h2 className="p-4">Game</h2>
                        <h3 className="px-4 pb-2">Rock, Paper, Scissor</h3>
                    </div>

                    <div className="lg:w-[30%] mb-20 border rounded-b-3xl w-full">
                        <img
                            src="RandomEmoji.jpg"
                            alt="my-brand portfolio"
                            className="w-full lg:h-[40vh] brightness-60"
                        />
                        <h2 className="p-4">Game</h2>
                        <h3 className="px-4 pb-2">Generate Random Emoji</h3>
                    </div>

                    <div className="lg:w-[30%] mb-20 border rounded-b-3xl w-full">
                        <img
                            src="diceRoller.jpg"
                            alt="my-brand portfolio"
                            className="w-full lg:h-[40vh] brightness-60"
                        />
                        <h2 className="p-4">Game</h2>
                        <h3 className="px-4 pb-2">Dice</h3>
                    </div>

                    <div className="lg:w-[30%] mb-20 border rounded-b-3xl w-full">
                        <img
                            src="Agrisales.jpg"
                            alt="my-brand portfolio"
                            className="w-full lg:h-[40vh] brightness-60"
                        />
                        <h2 className="p-4">Design</h2>
                        <h3 className="px-4 pb-2">Agrisales</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
