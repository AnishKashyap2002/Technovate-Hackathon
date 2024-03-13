"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type authContextProps = {
    children: ReactNode;
};
const AuthContext = ({ children }: authContextProps) => {
    return <SessionProvider>{children} </SessionProvider>;
};

export default AuthContext;
