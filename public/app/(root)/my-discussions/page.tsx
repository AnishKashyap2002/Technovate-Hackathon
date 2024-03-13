import { getUserDiscussions } from "@/actions";
import Discussions from "@/components/Discussions/Discussions";
import { Discussion } from "@/types";

const Page = async () => {
    const discussions = JSON.parse(await getUserDiscussions()) as Discussion[];
    return (
        <div className="">
            <Discussions discussions={discussions} />
        </div>
    );
};

export default Page;
