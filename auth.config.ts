import type { NextAuthConfig } from "next-auth";
import { CredentialsSignin } from "next-auth/providers";
import { getUserByEmail } from "@/data/user";
import bycriptjs from "bcryptjs";
import { Provider } from "@radix-ui/react-toast";
import { signInSchema } from "@/lib/zod";

export default {
    Provider: [
        Credential({
            async authorize(credentials) {
                const validatedFields = signInSchema.safeParse(credentials);
            },
        })
    ]
}
