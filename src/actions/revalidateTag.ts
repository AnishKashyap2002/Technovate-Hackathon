import { revalidatePath } from "next/cache";

export const revalidateTag = (tag: string) => {
    revalidatePath(tag);
};
