import { getProjects } from "@/actions/getProjects";
import Projects from "@/components/Projects/Projects";

export default async function Home() {
    try {
        const projects = await getProjects();

        return (
            <main className="">
                <Projects projects={projects} />
            </main>
        );
    } catch {
        return (
            <div className="font-bold text-red flex justify-center items-center">
                An error occured... please refresh the page
            </div>
        );
    }
}
