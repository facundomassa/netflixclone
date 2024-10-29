import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Profiles() {
    const session = await auth();

    console.log(session);

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className="h-full flex flec-col justify-center items-center bg-zinc-900">
            <div>
                <h1 className="text-5xl mb-8">¿Quien eres? Elige tu perfil</h1>
            </div>
        </div>
    );
}