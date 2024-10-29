import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { Terms } from "../components/Terms/Terms";
import { LoginForm } from "./LoginForm";
import { auth } from "@/auth";

export default async function Login() {
    const session = await auth();

    return (
        <div>
            <p className="text-3xl font-bold text-left mb-7">Iniciar sesion</p>
            <LoginForm />
            <p>Session {JSON.stringify(session)}</p>
            <div className="mt-5 text-center">
                <Link href="/" className="hover:underline hover:opacity-70">
                    ¿Has olvidado tu contraseña?
                </Link>
            </div>

            <div className="flex intems-center space-x-2 mt-4">
                <Checkbox id="terms" className="border-white" />
                <label htmlFor="terms" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Recuerdame
                </label>
            </div>

            <div className="mt-4 flex gap-1">
                <p className="text.white opacity-70">¿No tienes cuenta?</p>
                <Link href="/register" className="opacity-1 text-white hover:underline hover:opacity-70">  Registrate</Link>
            </div>

            <Terms />
        </div>
    );
}