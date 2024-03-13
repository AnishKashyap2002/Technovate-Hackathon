import { getDiscussionDetailById } from "@/actions";
import DiscussionBox from "@/components/Discussions/DiscussionBox";
import { Discussion } from "@/types";

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const discussion = JSON.parse(
        await getDiscussionDetailById(id)
    ) as Discussion;
    return (
        <div className="flex justify-center">
            <DiscussionBox discussion={discussion} />
        </div>
    );
};

export default Page;
