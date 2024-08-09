
import { signIn } from "@/auth"
import {Github} from "lucide-react";
import {Button} from "@/components/ui/button";

export function GithubSignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <Button variant={'outline'} className={'w-full'}>
                <Github className={'h-4 w-4 mr-2'}/>
                Continue with Github
            </Button>
        </form>
    )
}