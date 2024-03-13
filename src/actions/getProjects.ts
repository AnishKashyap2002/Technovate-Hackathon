// import Project from "@/lib/project";
// import Connection from "@/lib/connectDB";
// import { Project as ProjectType } from "@/types";

// export const getProjects = async () => {
//     try {
//         Connection();

//         const projects = await Project.find({})
//             .populate("user")
//             .sort({ createdAt: -1 });
//         // console.log(projects);
//         return projects as ProjectType[];
//     } catch (error) {
//         return [];
//     }
//     return [];
// };
