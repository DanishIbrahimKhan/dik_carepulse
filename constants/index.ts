export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Adhaar Card",
  "Pan Card",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Rajesh Kumar",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Priya Nair",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Anil Mehta",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Vikram Singh",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Sunita Desai",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Ahmed Khan",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Meera Patel",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Ayesha Siddiqui",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Rohan Gupta",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
