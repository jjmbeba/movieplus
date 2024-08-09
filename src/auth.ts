import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";

export const {handlers, signOut, signIn, auth} = NextAuth({
    providers:[GitHub, Google]
})