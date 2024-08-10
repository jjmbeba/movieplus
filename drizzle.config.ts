import { defineConfig } from "drizzle-kit";
import {config} from 'dotenv';

config({
    path:'.env.local'
})

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/schema.ts",
    out: "./drizzle",
    dbCredentials:{
        url:process.env.NEXT_PUBLIC_AUTH_DRIZZLE_URL!
    }
});