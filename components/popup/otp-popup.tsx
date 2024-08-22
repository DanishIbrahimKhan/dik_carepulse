import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

interface OTPOpupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
  title?: string;
  description?: string;
  buttonText?: string;
}

const OTPOpup: React.FC<OTPOpupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Verify OTP",
  description = "Please enter the OTP sent to your registered mobile number.",
  buttonText = "Verify",
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus the next input box
    if (element.nextSibling) {
      (element.nextSibling as HTMLElement).focus();
    }
  };

  const handleSubmit = () => {
    onSubmit(otp.join(""));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-80">
      <div className="relative bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <div className="flex items-start justify-between ">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
          <button
            onClick={onClose}
            className="text-white-400 hover:text-gray-200"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-300 mb-4 text-xs">{description}</p>
        <div className="flex justify-center mb-6 space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center text-2xl font-semibold bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>
        <Button onClick={handleSubmit} className="shad-primary-btn w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default OTPOpup;
