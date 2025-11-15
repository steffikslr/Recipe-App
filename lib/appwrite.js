import { Account, Avatars, Client, Databases, ID } from 'appwrite';


const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') 
  .setProject('6910a8bb00205317733b');             

// Export Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export { ID };

