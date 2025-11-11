import { Account, Avatars, Client, Databases, ID } from 'appwrite';


const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) 
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);             

// Export Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export { ID };

