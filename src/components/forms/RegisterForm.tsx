"use client";

import React from 'react'
import {useForm} from "react-hook-form";
import {z} from "zod";
import {registerSchema} from "@/components/schemas";
import {zodResolver} from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useMutation} from "@tanstack/react-query";
import {sendMagicLink} from "@/lib/actions";
import {Loader} from "lucide-react";
import {toast} from "sonner";

const RegisterForm = () => {
    const {data, isPending} = useMutation({
        mutationKey:['email'],
        mutationFn:async (values: z.infer<typeof registerSchema>) => {
            return await sendMagicLink(values.email)
        },
        onError:(error) => {
            toast.error(error.message)
        }
    })

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver:zodResolver(registerSchema),
        defaultValues:{
            email: ""
        }
    });

    function onSubmit(values: z.infer<typeof registerSchema>){
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="johndoe@email.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} className={'w-full'} type="submit">
                    {isPending && <Loader className={'w-4 h-4 mr-2 animate-spin'}/>}
                    Continue
                </Button>
            </form>
        </Form>
    )
}
export default RegisterForm
