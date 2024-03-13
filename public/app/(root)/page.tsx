import Image from "next/image";
import { PiStudent } from "react-icons/pi";
import logo from "@/../public/logo.jpeg";

const CardText = ["About us", "Contact us", "Our mission"];
const aboutText = [
    {
        title: "Real time Chat application",
        image: "https://www.blugraphic.com/wp-content/uploads/2014/05/1_.jpg",
        info: "Our site real time chat application with the features of chatting with different users by forming groups.",
    },
    {
        title: "Project progress report",
        image: "https://wallpaperaccess.com/full/5137774.jpg",
        info: "The project report encapsulates our journey from conceptualization to implementation, offering a comprehensive overview of our objectives, methodologies, findings, and insights. Through meticulous documentation and analysis, we present a detailed account of our project's progress, challenges encountered, and lessons learned.",
    },
    {
        title: "Support of artificial intelligence",
        image: "https://tse3.mm.bing.net/th?id=OIP.KwPFjO2CC4CXhWNkNkpmLAHaEK&pid=Api&P=0&h=180",
        info: "Welcome to our program, where we harness the power of Artificial Intelligence to support student project development. Through AI-driven tools and resources, we enhance learning experiences, streamline processes, and provide personalized guidance to empower students in their journey from conception to implementation. ",
    },
    {
        title: "Our mission",
        info: "Welcome to [Program/Initiative Name], where we empower students to bring their ideas to life through structured project development. Our mission is to foster innovation, creativity, and hands-on learning, guiding students from concept to implementation. ",
        image: "https://tse2.mm.bing.net/th?id=OIP.1NHzzXnyF_63926Oi85DSgHaE7&pid=Api&P=0&h=180",
    },
];

export default function Home() {
    return (
        <div className="">
            <div className="block">
                <main className="h-screen relative  flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')]">
                    <div className="flex flex-col gap-24 my-10 z-10">
                        <div className="flex flex-col  items-center">
                            <div className="rounded-full p-5 relative ">
                                <Image
                                    src={logo}
                                    alt="image"
                                    width={150}
                                    height={150}
                                    className="object-fit rounded-full"
                                />
                            </div>
                            <div className="text-[40px]  font-bold text-white ">
                                <div className="flex justify-center text-center">
                                    Improve your{" "}
                                    <span className=" bg-[#ff9f0d] h-fit text-black px-3 py-2 rounded-md">
                                        Project{" "}
                                    </span>{" "}
                                    today!
                                </div>
                            </div>
                            <div className="text-white font-thin">
                                Sturucted from concept to Creation
                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap items-center gap-4">
                            {CardText.map((text) => (
                                <div
                                    key={text}
                                    className="p-6 flex gap-2 rounded-md cursor-pointer bg-gray-800 text-white "
                                >
                                    <div className="flex gap-2">
                                        <PiStudent className="text-[#ff9f0d] text-[40px] " />
                                    </div>
                                    <div>
                                        <div className="text-lg">{text}</div>
                                        <div className="text-xs font-thin">
                                            View more
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-full bg-black opacity-60 absolute z-0" />
                </main>
            </div>
            <div className="mt-20">
                <h1 className=" text-center font-bold text-4xl p-4">
                    About us
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {aboutText.map((text) => (
                        <div
                            key={text.title}
                            style={{ backgroundImage: `url(${text.image})` }}
                            className={`h-60 flex rounded-xl overflow-hidden  justify-center items-center bg-center bg-cover object-fit w-[400px] relative `}
                        >
                            <div className="z-10 max-w-[300px]">
                                <div className="text-white  ">
                                    <h1 className="font-medium text-lg">
                                        {text.title}
                                    </h1>
                                    <p className="font-thin text-xs">
                                        {text.info}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-black absolute opacity-70 w-full h-full  z-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
