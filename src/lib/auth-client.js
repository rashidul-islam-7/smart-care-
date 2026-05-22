
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
   
    baseURL: process.env.NEXT_PUBLIC_AUTH_BASE_URL || process.env.BETTER_AUTH_URL
});
export const { signIn, signUp, signOut, useSession } = createAuthClient()