
import { signIn } from "@/auth"
import {Button} from "@/components/ui/button";
import GithubIcon from '@/components/common/icons/GithubIcon'

export function GithubSignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github", {
                    redirectTo:"/"
                })
            }}
        >
            <Button variant={'outline'} className={'w-full'}>
                <GithubIcon className={'h-4 w-4 mr-2 invert'}/>
                Continue with Github
            </Button>
        </form>
    )
}