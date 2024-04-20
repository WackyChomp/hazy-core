'use server';

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";

/* 
only renders on server side , 
creates token , 
call video provider without needing node Express server 
*/

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if(!user) throw new Error ("User is not logged in!!!")
  if(!apiKey) throw new Error ("No API Key!!!")
  if(!apiSecret) throw new Error ("No API Secret!!!")

  const client = new StreamClient(apiKey, apiSecret)

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;
  
  const token = client.createToken(user.id, exp, issued)

  return token;
}