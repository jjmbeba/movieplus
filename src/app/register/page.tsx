import React from 'react'
import {RegisterCard} from "@/components/RegisterCard";
import {CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import GoBackButton from "@/components/common/GoBackButton";
import Logo from "@/components/common/Logo";
import RegisterForm from "@/components/forms/RegisterForm";

const Page = () => {
    return (
        <div className={'flex items-center justify-center min-h-screen'}>
            <RegisterCard footerLink={'/login'} footerLinkText={'Already have an account? Login'}>
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-4">
                        <GoBackButton/>
                        Register To <Logo variant={'2xl'} />
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to register for an account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm/>
                </CardContent>
            </RegisterCard>
        </div>
    )
}
export default Page
