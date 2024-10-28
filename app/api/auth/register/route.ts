import bycript from "bcryptjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
export async function POST(req: Request) {
  const { email, password } = await req.json();
    try {
        const hashedPassword = await bycript.hash(password, 10);
        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return new NextResponse( "Ya existe el email", { status: 400 });
        }
        
        const userCreated = await db.user.create({
            data: {
              email,
              password: hashedPassword,
            },
          });
        return NextResponse.json(userCreated);
    } catch (error) {
        console.log(error);
        
        return new NextResponse("Internal Error", {status: 500})
    }
}