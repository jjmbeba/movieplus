import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import GoBackButton from "@/components/common/GoBackButton";
import {GithubSignIn} from "@/components/common/GithubSignIn";
import GoogleSignIn from "@/components/common/GoogleSignIn";

export function RegisterForm() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4">
                    <GoBackButton/>
                    Register
                </CardTitle>
                <CardDescription>
                    Enter your email below to register for an account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required/>
                </div>
            </CardContent>
            <CardFooter className={'flex flex-col gap-2'}>
                <Button className="w-full">Register</Button>
                <span>or</span>
                <div className={'w-full space-y-3'}>
                    <GithubSignIn/>
                    <GoogleSignIn/>
                </div>
            </CardFooter>
        </Card>
    )
}
