"use client";

import { getPolls } from "@/actions";
import PollsAll from "@/components/poll-components/PollsAll";
import Navbar from "@/components/Navbar";
import { PollType } from "@/types";
import Connection from "@/lib/connectDB";
import Poll from "@/lib/poll";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [polls, setPolls] = useState<PollType[] | []>([]);

    const getData = async () => {
        axios.get("/api/get/polls").then((response) => {
            setPolls(response.data);
        });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <main className="bg-gradient-to-r from-slate-950 to-slate-800 object-cover">
            <PollsAll pollls={polls} />
        </main>
    );
}
