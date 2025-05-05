// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_APP_API_KEY as string,
    authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_APP_DATABASE_URL,
    projectId: process.env.NEXT_APP_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_APP_ID,
    measurementId: process.env.NEXT_APP_MEASUREMENT_ID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyAJnXWnkVpa0I_pC1pciPVhQIBOP63xB48",
//     authDomain: "khana-khazana-5cc9b.firebaseapp.com",
//     databaseURL:
//         "https://khana-khazana-5cc9b-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "khana-khazana-5cc9b",
//     storageBucket: "khana-khazana-5cc9b.appspot.com",
//     messagingSenderId: "618062928506",
//     appId: "1:618062928506:web:bbb3c851e0f1faf060f9c3",
//     measurementId: "G-4CNDHYG790",
// };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const emailProvider = new EmailAuthProvider();

export { app, auth, emailProvider };
