import * as sdk from "node-appwrite";
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc9b94003a117165e6").setKey("46ac4846c5010dc73822f4f97147aa8fc7b9e3f00c6c7da742e9c3ad5dd111b5cc9626af713da94429115170a450b4cad8fff752ce4cd34f67e9ed9da549b8247dbb810fa336d1c6cd4fa4c82868496de659085048780e798621d1a543debee7ee10dd40ea0e9dff7b5de0b42ee9089a6515c4449fcea91ff2e9452c94d0120f");
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
