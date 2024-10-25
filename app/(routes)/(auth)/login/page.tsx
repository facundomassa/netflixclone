import Link from "next/link";

export default function Login() {
    return (
        <div>
            <p className="text-3xl font-bold text-left mb-7">Iniciar sesion</p>
            <p>Form login..</p>

            <div className="mt-5 text-center">
                <Link href="/" className="hover:underline hover:opacity-70">
                    ¿Has olvidado tu contraseña?
                </Link>
            </div>

            <div className="flex intems-center space-x-2 mt-4">

            </div>
        </div>
    );
}