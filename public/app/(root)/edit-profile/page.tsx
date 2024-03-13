import getCurrentUserDetails from "@/actions/getCurrentUserDetails";
import EditUserDetails from "@/components/EditUserDetails";

const page = async () => {
    const user = JSON.parse(await getCurrentUserDetails());
    // console.log(user, "use details");

    return (
        <div className="">
            <EditUserDetails user={user} />
        </div>
    );
};

export default page;
