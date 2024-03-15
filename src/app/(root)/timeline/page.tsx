"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineArr } from "@/constants/timeline";
import imag from "@/../public/avenger.svg";
import { FaBoltLightning } from "react-icons/fa6";

const Icon = () => {
    return (
        <img
            src={imag}
            alt="image"
        />
    );
};

const Page = () => {
    return (
        <div className="bg-gradient-to-r from-slate-950 to-slate-800">
            <VerticalTimeline className="">
                {timelineArr.map((timeline) => (
                    <VerticalTimelineElement
                        key={Math.random()}
                        visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "transparent",
                            color: "#fff",
                        }}
                        style={{ border: "none" }}
                        contentArrowStyle={{
                            borderRight: "7px solid  #9f31e8",
                        }}
                        iconStyle={{
                            background: "#9f31e8",
                            color: "#fff",
                        }}
                        icon={<FaBoltLightning />}
                    >
                        <article className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[500px] mx-auto mt-24 h-[600px] ">
                            <span className="absolute opacity-0 transition duration-300 delay-100 group-hover:opacity-100 z-10 object-cover">
                                {timeline.data}
                            </span>
                            <img
                                src={timeline.image}
                                alt="Image"
                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 transition duration-300 delay-100 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:from-gray-950 group-hover:via-gray-950" />
                            <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:invisible transition-opacity">
                                {timeline.title}
                            </h3>
                            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 group-hover:invisible ">
                                {timeline.date}
                            </div>
                        </article>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Page;
