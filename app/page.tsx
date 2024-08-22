"use client"
import PatientForm from "@/components/forms/PatientForm";
import Toast from "@/components/Toast";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
     <Toast />
      {/* Todo: OTP varification / passkeyModal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            alt="logo"
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-12-regular mt-10 flex justify-between">
            <p className="justify-content-end text-dark-600 xl:text-left">
              {" "}
              © 2024 carepulse{" "}
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        alt="doctor"
        src={"/assets/images/onboarding-img.png"}
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
