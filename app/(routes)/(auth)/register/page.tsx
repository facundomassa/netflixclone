import Link from "next/link";
import { Terms } from "../components/Terms/Terms";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
    return (
        <div>
            <p className="text-3xl font-bold text-left mb-7">Registro de usuario</p>
            <RegisterForm />
            <div className="mt-4 flex gap-1">
                <p className="text.white opacity-70">¿Ya tienes cuenta?</p>
                <Link href="/login" className="opacity-1 text-white hover:underline hover:opacity-70">  
                Iniciar sesión</Link>
            </div>
            <Terms />
        </div>
    );
}