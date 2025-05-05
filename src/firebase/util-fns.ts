// Helper function to map Firebase Auth error codes to user-friendly messages
export function getFirebaseAuthErrorMessage(code: string) {
    switch (code) {
        case "auth/email-already-in-use":
            return "Registration failed. Please try again.";
        case "auth/invalid-email":
            return "Registration failed. Please try again.";
        case "auth/weak-password":
            return "Registration failed. Please try again.";
        // Add more cases for other error codes as needed
        case "auth/invalid-credential":
            return "Invalid credentials. Please check and try again.";
        default:
            return "An unknown Firebase Authentication error occurred.";
    }
}
