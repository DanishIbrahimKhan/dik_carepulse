import { useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, Auth, ConfirmationResult } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Extend Window interface to include recaptchaVerifier
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

const PhoneSignIn: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container", // ID of the HTML element where reCAPTCHA will be rendered
        {
          size: "invisible", // Use invisible reCAPTCHA
          callback: (response) => {
            // reCAPTCHA solved, proceed with phone authentication
            console.log("reCAPTCHA solved");
          },
        },
        auth // Firebase Auth instance
      );
    }
  }, []);

  const sendVerificationCode = async (phoneNumber: string) => {
    const appVerifier = window.recaptchaVerifier as RecaptchaVerifier;
    try {
      const confirmationResult: ConfirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      const code = prompt("Enter the verification code sent to your phone");
      if (code) {
        const result = await confirmationResult.confirm(code);
        console.log("User signed in:", result.user);
      } else {
        console.error("No code entered");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <div id="recaptcha-container"></div> {/* This is where the reCAPTCHA will be rendered */}
      <button onClick={() => sendVerificationCode("+1234567890")}>
        Send Verification Code
      </button>
    </div>
  );
};

export default PhoneSignIn;
