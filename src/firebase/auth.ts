"use server";

import { auth } from "@/firebase/firebase-config";
import {
    createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
} from "firebase/auth";
import { loginSchema, registerSchema } from "./formValidators";
import { getFirebaseAuthErrorMessage } from "./util-fns";
import { redirect } from "next/navigation";

export async function registerWithEmail(
    prevState: unknown,
    formData: FormData
) {
    try {
        const result = registerSchema.safeParse(
            Object.fromEntries(formData.entries())
        );

        if (!result.success) {
            console.log("Should get errors");
            return {
                errors: result.error.flatten().fieldErrors,
            };
        }

        const { email, password } = result.data;

        const userCreds = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCreds.user;

        console.log(user.getIdToken(), user.uid, JSON.stringify(user, null, 2));

        // send verification email
        await sendEmailVerification(user);

        return { success: true };
    } catch (error: unknown) {
        if (error instanceof Error) {
            // Check if the error is a Firebase Auth error

            if ((error as FirebaseAuthError).code?.startsWith("auth/")) {
                // Handle Firebase Auth error
                const firebaseAuthErrorCode = (error as FirebaseAuthError).code;
                const errorMessage = getFirebaseAuthErrorMessage(
                    firebaseAuthErrorCode as string
                );
                return {
                    errors: {
                        email: errorMessage,
                        // code: firebaseAuthErrorCode,
                        password: null,
                        confirm_password: null,
                    },
                };
            } else {
                // Generic error handling for non-Firebase Auth errors
                console.error("Generic Error:", error.message);
                return {
                    errors: {
                        email: "An unexpected error occurred",
                        password: "An unexpected error occurred",
                        confirm_password: "An unexpected error occurred",
                        // code: "UNKNOWN_ERROR",
                    },
                };
            }
        } else {
            console.error("Unknown error occurred:", error);
            return {
                errors: {
                    email: "An unknown error occurred",
                    password: "An unknown error occurred",
                    confirm_password: "An unknown error occurred",
                    // code: "UNKNOWN_ERROR",
                },
            };
        }
    }
}

export async function loginWithEmail(prevState: unknown, formData: FormData) {
    const result = loginSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!result.success) {
        console.log("Should get errors", result.error.flatten().fieldErrors);
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { email, password } = result.data;
    try {
        // const userCreds = await signInWithEmailAndPassword(
        //     auth,
        //     email,
        //     password
        // );
        // const user = userCreds.user;
        // if (!user.emailVerified) {
        //     return {
        //         errors: {
        //             email: "An unknown error occurred",
        //             // code: firebaseAuthErrorCode,
        //             password: "An unknown error occurred",
        //         },
        //     };
        // }
        // const token = await user.getIdToken();
        // console.log(user.uid, token);
        // console.log(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            if ((error as FirebaseAuthError).code?.startsWith("auth/")) {
                // Handle Firebase Auth error
                const firebaseAuthErrorCode = (error as FirebaseAuthError).code;
                const errorMessage = getFirebaseAuthErrorMessage(
                    firebaseAuthErrorCode as string
                );
                return {
                    errors: {
                        email: errorMessage,
                        // code: firebaseAuthErrorCode,
                        password: null,
                    },
                };
            } else {
                console.error("NON AUTH ERROR", error.message);
                console.error("Authentication error:", error);
                console.error("Error message:", error.message);
                console.error("Additional error details:", error);
                return {
                    errors: {
                        email: "An unknown error occurred",
                        // code: firebaseAuthErrorCode,
                        password: "An unknown error occurred",
                    },
                };
            }
        } else {
            console.error("Unknown error occured");
            return {
                errors: {
                    email: "An unknown error occurred",
                    // code: firebaseAuthErrorCode,
                    password: "An unknown error occurred",
                },
            };
        }
    }

    if (email === "test@nbdh.social" && password === "password") {
        redirect("/businesses");
    } else {
        return {
            errors: {
                email: "Invalid credentials. Please check and try again.",
                // code: firebaseAuthErrorCode,
                password: "Invalid credentials. Please check and try again.",
            },
        };
    }
}

export async function logout() {
    await signOut(auth);
}
