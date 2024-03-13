import { getPolls } from "@/actions";
import PollsAll from "@/components/poll-components/PollsAll";
import Navbar from "@/components/Navbar";
import { PollType } from "@/types";

export default async function Home() {
    const AllPolls = await getPolls();

    console.log(AllPolls);

    return (
        <main className="">
            <PollsAll pollls={[]} />
        </main>
    );
}
