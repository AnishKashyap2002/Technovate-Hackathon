// export type Project = {
//     _id: string;
//     user: User;
//     image: string | null;
//     info: string;
//     hashtags: string[];
//     name: string;
//     link: string | null;
//     timelimit: number;
//     document: string;
//     createdAt: Date;

//     milestones: [
//         {
//             title: string;
//             completed: boolean;
//         }
//     ];
// };

// export type UserLean = {
//     _id: string;
//     name: string;
//     email: string;
//     hashedPassword: string;
//     projects: string[];
//     bio: string | null;
//     image: string | null;
// };

// export type User = {
//     _id: string;
//     name: string;
//     email: string;
//     hashedPassword: string;
//     projects: Project[] | [];
//     bio: string | null;
//     image: string | null;
// };

// export type Message = {
//     _id: string;
//     body: string | null;
//     image: string | null;
//     discussion: Discussion;
//     link: string | null;
//     user: User;
//     createdAt: Date;
//     likes: User[];
// };

// export type Discussion = {
//     _id: string;
//     topic: string;
//     owner: User;
//     hashtags: string[];
//     messages: Message[];
//     users: User[];
//     createdAt: Date;
// };

export type UserType = {
    _id: String;
    name: String;
    email: String;
    hashedPassword: String;
    bio: String;
    image: String;
    coins: Number;
    inventory: String[];
};

export type CommentType = {
    _id: String;
    data: String;
    user: UserType;
    createdAt: Date;
};

export type PostType = {
    _id: String;
    title: String;
    data: String;
    image: String;
    user: UserType;
    comments: CommentType[];
    createdAt: Date;
};

export type PollType = {
    _id: String;
    title: String;
    options: {
        name: String;
        votes: Number;
    }[];
    voters: UserType[];
    createdAt: Date;
};
