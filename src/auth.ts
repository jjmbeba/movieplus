import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Resend from "@auth/core/providers/resend";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import {db} from "@/db";

export const {handlers, signOut, signIn, auth} = NextAuth({
    adapter:DrizzleAdapter(db),
    providers:[
        GitHub,
        Google,
        Resend
    ]
})