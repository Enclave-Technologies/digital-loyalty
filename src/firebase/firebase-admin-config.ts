import "server-only";
import admin from "firebase-admin";
import { getApps, initializeApp, ServiceAccount } from "firebase-admin/app";
import serviceAccount from "./sdk-key.json";

// Load the service account key JSON file contents
// const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG!);

// Initialize the Firebase Admin SDK
export async function getAdminApp() {
    if (getApps().length > 0) {
        return admin.app();
    }

    return initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
}
