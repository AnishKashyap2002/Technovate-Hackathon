"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import styles from "./styles/AuthForm.module.css";
// import { BsFacebook } from "react-icons/bs";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMail, MdPassword } from "react-icons/md";

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

    const submitEvent = async (e: FormEvent) => {
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
                callbackUrl: "/",
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
                    // router.push("/");
                }
            });
        } else {
            if (!user.username) {
                toast.error("All fields are necessary");
                return;
            }
            setLoading(true);

            await fetch("/api/register", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },

                //make sure to serialize your JSON body
                body: JSON.stringify(user),
            })
                .then((response) => {
                    toast.success("User created successfully");

                    console.log(response);
                    signIn("credentials", {
                        email: user.email,
                        callbackUrl: "/",
                        password: user.password,
                    });
                })
                .catch(async (error) => {
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
        <>
            <div className={styles.hero}>
                <div className={`${styles.box} ${styles.avengersGradient}`}>
                    <div className={styles.container}>
                        <h1 className="text-center font-bold text-2xl">
                            {variant == "LOGIN" ? "Sign In" : "Sign Up"}
                        </h1>
                        <form
                            id="signup-form"
                            onSubmit={submitEvent}
                            className={`${loading && "opacity-50"}`}
                        >
                            {variant == "REGISTER" && (
                                <div className={styles.formGroup}>
                                    <div className={styles.inline}>
                                        {/* <i className={`${styles.fa-solid} ${styles.fa-user} `}></i> */}
                                        <FaUserAlt className="text-2xl text-rose-500" />
                                        <label
                                            className={styles.icon}
                                            htmlFor="username"
                                        >
                                            Username
                                        </label>
                                    </div>
                                    <input
                                        className={styles.border}
                                        type="text"
                                        id="username"
                                        name="username"
                                        required
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                username: e.target.value,
                                            })
                                        }
                                        placeholder="Enter your name "
                                    />
                                </div>
                            )}
                            <div className={styles.formGroup}>
                                <div className={styles.inline}>
                                    <MdOutlineMail className="text-2xl text-rose-500" />
                                    <label
                                        className={styles.icon}
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                </div>
                                <input
                                    className={styles.border}
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <div className={styles.inline}>
                                    <MdPassword className="text-2xl text-rose-500" />

                                    {/* <i className={${styles.fa-solid} ${styles.fa-key}}></i> */}
                                    <label
                                        className={styles.icon}
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                </div>
                                <input
                                    className={styles.border}
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
                                    required
                                    placeholder="Enter your password"
                                />
                                <div id="password-strength-meter"></div>
                            </div>
                            <div className={styles.formGroup}>
                                <button
                                    type="submit"
                                    disabled={loading}
                                >
                                    {variant == "LOGIN" ? "Sign In" : "Sign Up"}
                                </button>
                            </div>
                        </form>
                        <div
                            className={styles.error}
                            id="error"
                        ></div>
                        <div className={styles.exisistingUser}>
                            {variant == "LOGIN" ? (
                                <label
                                    htmlFor=""
                                    onClick={() => setVariant("REGISTER")}
                                >
                                    New User? <span>Sign Up</span>
                                </label>
                            ) : (
                                <label
                                    htmlFor=""
                                    onClick={() => setVariant("LOGIN")}
                                >
                                    Already a user? <span>Sign in</span>
                                </label>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthForm;

// <div className={styles.component + " text-black"}>
//             <div className={`${styles.wrapper}  `}>
//                 <div className={`${styles.formWrapper} ${styles.signIn}`}>
//                     <form
//                         action=""
//                         onSubmit={submitEvent}
//                         className={`${loading && "opacity-50"}`}
//                     >
//                         <h2>{variant == "LOGIN" ? "Sign In" : "Sign Up"}</h2>
//                         {variant == "REGISTER" && (
//                             <div className={styles.inputGroup}>
//                                 <input
//                                     type="text"
//                                     required
//                                     onChange={(e) =>
//                                         setUser({
//                                             ...user,
//                                             username: e.target.value,
//                                         })
//                                     }
//                                 />
//                                 <label>Username </label>
//                             </div>
//                         )}
//                         <div className={styles.inputGroup}>
//                             <input
//                                 type="email"
//                                 required
//                                 className=" bg-transparent"
//                                 onChange={(e) =>
//                                     setUser({ ...user, email: e.target.value })
//                                 }
//                             />
//                             <label>Email </label>
//                         </div>
//                         <div className={styles.inputGroup}>
//                             <input
//                                 type="password"
//                                 className=" bg-transparent"
//                                 required
//                                 onChange={(e) =>
//                                     setUser({
//                                         ...user,
//                                         password: e.target.value,
//                                     })
//                                 }
//                             />
//                             <label>Password </label>
//                         </div>
//                         <button
//                             type="submit"
//                             disabled={loading}
//                         >
//                             {variant == "LOGIN" ? "Sign In" : "Sign Up"}
//                         </button>
//                         {variant == "LOGIN" ? (
//                             <div className={`${styles.signUpLink} `}>
//                                 <p
//                                     className="flex justify-center gap-2 cursor-pointer"
//                                     onClick={() => setVariant("REGISTER")}
//                                 >
//                                     Don't have an account?{" "}
//                                     <span
//                                         className={`${styles.signUpBtnLink} text-pink-700`}
//                                     >
//                                         Sign Up{" "}
//                                     </span>
//                                 </p>
//                             </div>
//                         ) : (
//                             <div className={`${styles.signUpLink} `}>
//                                 <p
//                                     className="flex justify-center gap-2 cursor-pointer"
//                                     onClick={() => setVariant("LOGIN")}
//                                 >
//                                     Already Have an account?{" "}
//                                     <span
//                                         className={`${styles.signUpBtnLink} text-pink-700`}
//                                     >
//                                         Sign In{" "}
//                                     </span>
//                                 </p>
//                             </div>
//                         )}
//                         {/* <div className={styles.socialIcons}>
//                             <p className="text-white font-medium text-center">
//                                 Or Sign in with
//                             </p>
//                             <div className={styles.socialIcons}>
//                                 <div className="flex justify-center gap-2">
//                                     <span
//                                         className="cursor-pointer"
//                                         onClick={() => socialAction("google")}
//                                     >
//                                         <BsGoogle />
//                                     </span>
//                                     <span
//                                         className="cursor-pointer"
//                                         onClick={() => socialAction("github")}
//                                     >
//                                         <BsGithub />
//                                     </span>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </form>
//                 </div>
//             </div>
//         </div>
