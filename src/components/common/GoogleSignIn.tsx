import React from 'react'
import {signIn} from "@/auth";
import {Button} from "@/components/ui/button";
import GoogleIcon from "@/components/common/icons/GoogleIcon";

const GoogleSignIn = () => {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <Button variant={'outline'} className={'w-full'}>
                <GoogleIcon className={'h-4 w-4 mr-2'}/>
                Continue with Google
            </Button>
        </form>
    )
}
export default GoogleSignIn
