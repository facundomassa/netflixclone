"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { formSchema } from "./RegisterForm.form"
import { FormError } from "../../components/FormError"
import { useRouter } from "next/navigation"

export function RegisterForm() {
  const router = useRouter();

    const [error, setError] = useState<string | undefined>("");
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: "",
        repeatPassword: "",
        },
    })

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
      try{
        await axios.post("/api/auth/register", values)
        toast({
          title: "Usuario registrado correctamente",
        })
        router.push("/profiles")
      }
      catch(error){
        console.log(error);
        toast({
          title: "Hubo un error al registrar al usuario",
          variant: "destructive",
        })
      }
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Correo electrónico" {...field} className="h-14 text-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Contraseña" {...field} type="password" className="h-14 text-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repeatPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Repetir Contraseña" {...field} type="password" className="h-14 text-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <Button type="submit" className="w-full bg-[#e50914]">Registrarse</Button>
          </form>
        </Form>
      )
}

function toast(arg0: { title: string; description: string }) {
  throw new Error("Function not implemented.")
}
