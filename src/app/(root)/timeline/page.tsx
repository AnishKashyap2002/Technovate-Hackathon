"use client";

import React from "react";
import { IoCodeWorkingOutline } from "react-icons/io5";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineArr } from "@/constants/timeline";
import imag from "@/../public/timeline/10th.webp";
import user from "@/../public/timeline/11ca.jpg";
import path from "../../../../public/timeline/10th.webp";

const Page = () => {
    return (
        <div className="bg-gray-700">
            <VerticalTimeline className="">
                {timelineArr.map((timeline) => (
                    <VerticalTimelineElement
                        key={Math.random()}
                        visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        date={timeline.date}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<IoCodeWorkingOutline />}
                    >
                        <div className=" relative flex justify-center items-center flex-col">
                            <h1 className="font-bold text-2xl">
                                {timeline.title}
                            </h1>
                            <p className=" font-light text-sm">
                                {timeline.data}
                            </p>
                            <img
                                src={timeline.image}
                                alt="image"
                                className="absolute w-full h-full "
                            />
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Page;
