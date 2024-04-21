'use server';

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";

/* 
only renders on server side , 
creates token , 
call video provider without needing node Express server 
*/

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if(!user) throw new Error ("User is not logged in!!!")
  if(!STREAM_API_KEY) throw new Error ("No API Key!!!")
  if(!STREAM_SECRET) throw new Error ("No API Secret!!!")

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_SECRET)

  const expirationTime = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;
  
  const token = streamClient.createToken(user.id, expirationTime, issuedAt)

  return token;
}