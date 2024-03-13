"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import styles from "./styles/AuthForm.module.css";
// import { BsFacebook } from "react-icons/bs";
import { BsGithub, BsGoogle } from "react-icons/bs";

type VARIANT = "LOGIN" | "REGISTER";
type USER = {
    username: String;
    email: String;
    password: String;
};

const AuthForm = () => {
    const [variant, setVariant] = useState<VARIANT>("LOGIN");

    const router = useRouter();
    const [user, setUser] = useState({
        username: "",

        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const submitEvent = (e: FormEvent) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            toast.error("All fields are necessary");
            console.log("Everything not come", user);
            return;
        }

        if (variant == "LOGIN") {
            setLoading(true);
            console.log(user);
            signIn("credentials", {
                redirect: false,
                email: user.email,
                password: user.password,
            }).then((response) => {
                console.log(response);
                if (response?.error) {
                    console.log(response);
                    toast.error("Invalid credentials");
                    setLoading(false);
                } else if (response?.ok) {
                    toast.success("Signed In successfully");
                    router.push("/");
                }
            });
        } else {
            if (!user.username) {
                toast.error("All fields are necessary");
                return;
            }
            setLoading(true);

            axios
                .post("/api/register", user)
                .then((response) => {
                    toast.success("User created successfully");
                    signIn("credentials", {
                        email: user.email,
                        password: user.password,
                    }).then(() => {
                        router.push("/");
                    });
                })
                .catch((error) => {
                    toast.error("A problem occured");
                })
                .finally(() => {
                    setLoading(false);
                });

            console.log("The data is ", user);
        }
    };

    const socialAction = (action: string) => {
        setLoading(true);

        signIn(action, { callbackUrl: "/" }).then((callback) => {
            console.log(callback);
            if (callback?.ok) {
                toast.success("Login Success");
                router.push("/");
            } else if (callback?.error) {
                toast.error("Invalid credentials");
            }
        });
    };

    return (
        // <div classNameName="flex h-full w-full items-center justify-center my-8 ">
        //     <div
        //         classNameName={`shadow-md bg-gradient-to-r  from-green-500 min-w-[500px] to-yellow-500 px-2 py-2 rounded-xl ${
        //             loading && "opacity-50"
        //         }`}
        //     >
        //         <form
        //             onSubmit={submitEvent}
        //             classNameName="bg-white  rounded-md px-3 py-2 flex flex-col gap-2"
        //         >
        //             <legend classNameName="font-bold text-2xl flex justify-center">
        //                 {" "}
        //                 {variant == "LOGIN" ? "Log In" : "Sign Up"}{" "}
        //             </legend>
        //             {variant == "REGISTER" && (
        //                 <div classNameName="bg-gradient-to-r from-yellow-300 to-green-300 rounded-md px-3 py-2 flex flex-col">
        //                     <label
        //                         htmlFor=""
        //                         classNameName="text-lg"
        //                     >
        //                         Username
        //                     </label>
        //                     <input
        //                         type="text"
        //                         classNameName=" outline-none px-2 py-1 rounded-lg bg-white"
        //                         placeholder="Enter your username..."
        //                         required
        //                         onChange={(e) =>
        //                             setUser({
        //                                 ...user,
        //                                 username: e.target.value,
        //                             })
        //                         }
        //                     />
        //                 </div>
        //             )}
        //             <div classNameName="bg-gradient-to-r from-yellow-300 to-green-300 rounded-md px-3 py-2 flex flex-col">
        //                 <label
        //                     htmlFor=""
        //                     classNameName="text-lg"
        //                 >
        //                     Email
        //                 </label>
        //                 <input
        //                     type="email"
        //                     classNameName="px-2 outline-none py-1 rounded-lg bg-white"
        //                     placeholder="Enter your email..."
        //                     required
        //                     onChange={(e) =>
        //                         setUser({
        //                             ...user,
        //                             email: e.target.value,
        //                         })
        //                     }
        //                 />
        //             </div>
        //             <div classNameName="bg-gradient-to-r from-yellow-300 to-green-300 rounded-md px-3 py-2 flex flex-col">
        //                 <label
        //                     htmlFor=""
        //                     classNameName="text-lg"
        //                 >
        //                     Password
        //                 </label>
        //                 <input
        //                     type="password"
        //                     classNameName="px-2 py-1 outline-none rounded-lg bg-white"
        //                     placeholder="Enter your password..."
        //                     required
        //                     onChange={(e) =>
        //                         setUser({
        //                             ...user,
        //                             password: e.target.value,
        //                         })
        //                     }
        //                 />
        //             </div>
        //             <button
        //                 type="submit"
        //                 disabled={loading}
        //                 classNameName={`bg-gradient-to-r ${
        //                     loading && "opacity-50"
        //                 }  from-green-500 to-cyan-500 px-4 py-2 rounded-md font-bold text-xl w-fit`}
        //             >
        //                 {variant == "LOGIN" ? "Log In" : "Sign Up"}{" "}
        //             </button>
        //             <div classNameName="flex jusify-center">
        //                 {variant == "LOGIN" ? (
        //                     <div classNameName="">
        //                         <span>New user? </span>
        //                         <span
        //                             classNameName=" text-blue-600 cursor-pointer"
        //                             onClick={() => setVariant("REGISTER")}
        //                         >
        //                             Sign Up
        //                         </span>
        //                     </div>
        //                 ) : (
        //                     <div classNameName="">
        //                         <span>Existing User? </span>
        //                         <span
        //                             classNameName=" text-blue-600 cursor-pointer"
        //                             onClick={() => setVariant("LOGIN")}
        //                         >
        //                             Sign In
        //                         </span>
        //                     </div>
        //                 )}
        //             </div>
        //             <div classNameName="relative pt-4">
        //                 <div classNameName="flex justify-center  px-8 z-0">
        //                     {" "}
        //                     <p classNameName="bg-white px-8 font-bold ">
        //                         Login using
        //                     </p>
        //                 </div>
        //                 <div classNameName="bg-gray-500 h-[2px]  " />
        //             </div>
        //             <div classNameName="flex justify-center gap-2 w-full">
        //                 <div
        //                     onClick={() => socialAction("google")}
        //                     classNameName="cursor-pointer px-3 py-2 rounded-md bg-gradient-to-r from-yellow-300 to-green-300"
        //                 >
        //                     Google
        //                 </div>
        //                 <div
        //                     onClick={() => socialAction("github")}
        //                     classNameName=" cursor-pointer px-3 py-2 rounded-md bg-gradient-to-r from-yellow-300 to-green-300"
        //                 >
        //                     Github
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div className={styles.component + " text-black"}>
            <div className={`${styles.wrapper}  `}>
                <div className={`${styles.formWrapper} ${styles.signIn}`}>
                    <form
                        action=""
                        onSubmit={submitEvent}
                        className={`${loading && "opacity-50"}`}
                    >
                        <h2>{variant == "LOGIN" ? "Sign In" : "Sign Up"}</h2>
                        {variant == "REGISTER" && (
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            username: e.target.value,
                                        })
                                    }
                                />
                                <label>Username </label>
                            </div>
                        )}
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                required
                                className=" bg-transparent"
                                onChange={(e) =>
                                    setUser({ ...user, email: e.target.value })
                                }
                            />
                            <label>Email </label>
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                className=" bg-transparent"
                                required
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <label>Password </label>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {variant == "LOGIN" ? "Sign In" : "Sign Up"}
                        </button>
                        {variant == "LOGIN" ? (
                            <div className={`${styles.signUpLink} `}>
                                <p
                                    className="flex justify-center gap-2 cursor-pointer"
                                    onClick={() => setVariant("REGISTER")}
                                >
                                    Don't have an account?{" "}
                                    <span
                                        className={`${styles.signUpBtnLink} text-pink-700`}
                                    >
                                        Sign Up{" "}
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div className={`${styles.signUpLink} `}>
                                <p
                                    className="flex justify-center gap-2 cursor-pointer"
                                    onClick={() => setVariant("LOGIN")}
                                >
                                    Already Have an account?{" "}
                                    <span
                                        className={`${styles.signUpBtnLink} text-pink-700`}
                                    >
                                        Sign In{" "}
                                    </span>
                                </p>
                            </div>
                        )}
                        <div className={styles.socialIcons}>
                            <p className="text-white font-medium text-center">
                                Or Sign in with
                            </p>
                            <div className={styles.socialIcons}>
                                <div className="flex justify-center gap-2">
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => socialAction("google")}
                                    >
                                        <BsGoogle />
                                    </span>
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => socialAction("github")}
                                    >
                                        <BsGithub />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
