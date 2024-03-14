import getCurrentUserDetails from "@/actions/getCurrentUserDetails";
import EditUserDetails from "@/components/EditUserDetails";

const page = async () => {
    const user = JSON.parse(await getCurrentUserDetails());
    // console.log(user, "use details");

    return (
        <div className="bg-gradient-to-r from-slate-950 to-slate-800">
            <EditUserDetails user={user} />
        </div>
    );
};

export default page;
