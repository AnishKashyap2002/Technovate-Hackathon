import { getProjectById } from "@/actions";
import EditProject from "@/components/Projects/EditProject";
import { Project } from "@/types";

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const project = JSON.parse(await getProjectById(id)) as Project;

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md">
                <EditProject oldProject={project} />
            </div>
        </div>
    );
};

export default Page;
