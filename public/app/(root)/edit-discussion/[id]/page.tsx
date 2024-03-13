import { getDiscussionById } from "@/actions";
import EditDiscussion from "@/components/Discussions/EditDiscussion";
import { Discussion } from "@/types";

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const discussion = JSON.parse(await getDiscussionById(id)) as Discussion;

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md">
                <EditDiscussion oldDiscussion={discussion} />
            </div>
        </div>
    );
};

export default Page;
