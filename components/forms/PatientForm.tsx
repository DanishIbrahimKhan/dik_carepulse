"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validations";
import { Form } from "../ui/form";
import { Account, Client, ID } from "node-appwrite";
import { createUser } from "@/lib/actions/patient.actions";
import { showToast } from "../Toast";

// Define the types for the form data
type FormData = z.infer<typeof UserFormValidation>;

const PatientForm: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOTPOpen, setOTPOpen] = useState(false);
  // const [userIdToken, setUserIdToken] = useState("");

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    // alert("Form Submitted with values: " + JSON.stringify(values)); // Use alert to debug
    setIsLoading(true);
  
    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };
  
      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patient/${newUser.$id}/register`);
        showToast('User created successfully!');
      }
      setIsLoading(false);
      
    } catch (error) {
      showToast("failed")
      // alert("Error during submission: " + (error instanceof Error ? error.message : "Unknown error"));
      setIsLoading(false);
    }
  
  };

  // const handleOpenOTP = () => setOTPOpen(true);
  // const handleCloseOTP = () => setOTPOpen(false);
  // const handleSubmitOTP = async(otp:string) => {
  //   const session = await account.createSession(
  //     userIdToken,
  //     otp
  // );
  //   console.log("OTP Submitted", session);
  //   setOTPOpen(false);
  // };
  const form = useForm<FormData>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "", // Add password field
      phone: "", // Add password field
    },
  });

  // Define the submit handler
  // async function onSubmit({ name, phone }: FormData) {
  //   console.log(name, phone);
  //   setIsLoading(true);
  //   const token = await account.createPhoneToken(ID.unique(), phone);
  //   setUserIdToken(token.userId);
  //   setIsLoading(false);
  //   handleOpenOTP();
  // }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          {/* <h1 className="header">Hi there</h1> */}
          <p className="text-dark-600">Schedule your appointment</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@js.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+91 91 7223 7224"
          iconAlt="phone"
        />
        {/* <CustomFormField
          fieldType={FormFieldType.PASSWORD} // Assuming FormFieldType.INPUT is used for password
          control={form.control}
          name="password1"
          label="Password1"
          placeholder="••••••••"
          iconSrc="/assets/icons/lock.svg"
          iconAlt="lock"
        /> */}
        {/* <CustomFormField
          fieldType={FormFieldType.PASSWORD} // Assuming FormFieldType.INPUT is used for password
          control={form.control}
          name="password"
          label="Password"
          placeholder="••••••••"
          iconSrc="/assets/icons/lock.svg"
          iconAlt="lock"
        /> */}
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
      {/* <OTPOpup
        isOpen={isOTPOpen}
        onClose={handleCloseOTP}
        onSubmit={handleSubmitOTP}
        title="Verify Your Phone"
        description="An OTP has been sent to your phone number. Please enter it below."
        buttonText="Verify"
      /> */}
    </Form>
  );
};

export default PatientForm;
