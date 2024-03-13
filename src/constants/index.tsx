import { AiOutlineLogout } from "react-icons/ai";

import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import {
    MdGroupWork,
    MdGroups2,
    MdOutlineLocalPostOffice,
    MdTimeline,
} from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { GiArtificialHive } from "react-icons/gi";
import { LiaPollSolid } from "react-icons/lia";
export const navLinks = [
    {
        title: "Home",
        href: "/",
        icon: <GrGroup />,
    },
    {
        title: "Timeline",
        href: "/timeline",
        icon: <MdTimeline />,
    },
    {
        title: "Characters",
        href: "/characters",
        icon: <MdGroups2 />,
    },
    {
        title: "Polls",
        href: "/polls",
        icon: <LiaPollSolid />,
    },
    {
        title: "Posts",
        href: "/posts",
        icon: <MdOutlineLocalPostOffice />,
    },
];

export const userLinks = [
    {
        title: "Profile",
        href: "/profile",
        icon: <FaUserCircle />,
    },
    {
        title: "Edit",
        href: "/edit-profile",
        icon: <RiEditCircleFill />,
    },
    {
        title: "Logout",
        href: "/logout",
        icon: <AiOutlineLogout />,
    },
];

export const tags = [
    { label: "#JavaScript", value: "#JavaScript" },
    { label: "#Python", value: "#Python" },
    { label: "#HTML", value: "#HTML" },
    { label: "#CSS", value: "#CSS" },
    { label: "#Java", value: "#Java" },
    { label: "#React", value: "#React" },
    { label: "#Node.js", value: "#Node.js" },
    { label: "#SQL", value: "#SQL" },
    { label: "#MongoDB", value: "#MongoDB" },
    { label: "#C++", value: "#C++" },
    { label: "#PHP", value: "#PHP" },
    { label: "#Angular", value: "#Angular" },
    { label: "#Swift", value: "#Swift" },
    { label: "#Ruby", value: "#Ruby" },
    { label: "#C#", value: "#C#" },
    { label: "#Vue.js", value: "#Vue.js" },
    { label: "#TensorFlow", value: "#TensorFlow" },
    { label: "#Kotlin", value: "#Kotlin" },
    { label: "#R", value: "#R" },
    { label: "#Perl", value: "#Perl" },
];

export const footerLinks = [
    {
        title: "Teachers",
        data: [
            "Dr Sonal Chawla",
            "Dr Anuj Sharma",
            "Dr RK Singla",
            "Dr Indu Chabra",
            "Dr Anuj Kumar",
        ],
    },
    {
        title: "Contact us",
        data: [
            "XX-XXX-XX-XXX",
            "ZZ-ZZZ-ZZ-ZZZ",
            "abc.gmail.com",
            "xyz.gmail.com",
        ],
    },
    {
        title: "Other Info",
        data: ["Ratings", "Companies", "Study Material", "Books"],
    },
];
