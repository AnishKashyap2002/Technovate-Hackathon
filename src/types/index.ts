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
    _id: string;
    name: string;
    email: string;
    hashedPassword: string;
    bio: string;
    image: string;
    coins: Number;
    inventory: string[];
};

export type CommentType = {
    _id: string;
    data: string;
    user: UserType;
    createdAt: Date;
};

export type PostType = {
    _id: string;
    title: string;
    data: string;
    image: string;
    user: UserType;
    comments: CommentType[];
    createdAt: Date;
};

export type PollType = {
    _id: string;
    title: string;
    user: UserType;
    options: {
        name: string;
        votes: Number;
    }[];
    voters: UserType[];
    createdAt: Date;
};

export type CharacterType = {
    name: string;
    description: string;
    real_img: string;
    trivia: string;
    powers: string;
    img: string;
};
