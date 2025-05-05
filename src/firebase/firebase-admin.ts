"use server";

import { getAdminApp } from "./firebase-admin-config";
// import {
//     appCheck,
//     database,
//     firestore,
//     auth,
//     messaging,
//     storage,
//     functions,
// } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

export default async function handler() {
    await getAdminApp();
    // Use the adminApp instance to interact with Firebase
    const firestore = getFirestore();
    const userDocs = await firestore.collection("users").get();
    const documents = userDocs.docs.map((user) => ({
        _id: user.id,
        name: user.data().name,
        email: user.data().email,
        address: user.data().address,
    }));
    console.log("SNAPSHOT", documents);
}
