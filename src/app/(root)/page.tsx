"use client";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../../components/Scene"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

export default function Home() {
    return (
        <>
            <main className="min-h-screen  bg-[url('https://tenor.com/bkh5R.gif')] bg-cover bg-center flex justify-between flex-col sm:flex-row items-center   relative text-white">
                <div className="bg-black opacity-70 absolute h-full w-full z-10" />
                <img
                    src="/herobg.jpg"
                    alt="image"
                    className="absolute w-full h-full object-cover z-0"
                />
                <div className="w-full  p-10 z-20">
                    <div className="flex items-center flex-col gap-4">
                        <div className="">
                            <h1 className="font-bold text-[60px]">
                                Avengers, Assemble!
                            </h1>
                            <p className="font-light">
                                Explore the world of Avengers and Connect with
                                other fans.
                            </p>
                        </div>
                        <a href="/timeline">
                            <p className="bg-purple-700 text-white rounded-md p-4 hover:scale-105 transition duration-300 delay-100">
                                Get Started
                            </p>
                        </a>
                    </div>
                </div>
                <Scene i={0} />
            </main>

            <div className="bg-black text-white p-10 ">
                <h1 className="font-bold text-[40px] text-center">
                    What do we offer
                </h1>
                <div className="flex justify-between flex-col sm:flex-row items-center">
                    <div className="flex flex-col gap-4">
                        <div className="font-bold text-[40px] text-purple-700">
                            Arc Reactor
                        </div>
                        <p className="w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora dolores minima nesciunt perspiciatis,
                            earum beatae, eveniet ipsa asperiores,
                        </p>
                    </div>
                    <Scene i={1} />
                </div>
                <div className="flex justify-between flex-col sm:flex-row  items-center">
                    <Scene i={2} />
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-[40px] text-purple-700">
                            Hydra Helmet
                        </div>
                        <p className="w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora dolores minima nesciunt perspiciatis,
                            earum beatae, eveniet ipsa asperiores,
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
