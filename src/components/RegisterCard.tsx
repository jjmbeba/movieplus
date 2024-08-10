import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import GoBackButton from "@/components/common/GoBackButton";
import {GithubSignIn} from "@/components/common/GithubSignIn";
import GoogleSignIn from "@/components/common/GoogleSignIn";
import RegisterForm from "@/components/forms/RegisterForm";
import Logo from "@/components/common/Logo";
import {Link} from "next-view-transitions";
import {buttonVariants} from "@/components/ui/button";

type Props = {
    children?: React.ReactNode;
    footerLink: string;
    footerLinkText: string;
}

export function RegisterCard({children, footerLinkText, footerLink}:Props) {
    return (
        <Card className="w-full max-w-sm">
            {children}
            <CardFooter className={'flex flex-col gap-2'}>
                <span>or</span>
                <div className={'w-full space-y-3 flex flex-col justify-center'}>
                    <GithubSignIn/>
                    <GoogleSignIn/>
                    <Link className={buttonVariants({
                        variant: 'link'
                    })} href={footerLink}>
                        {footerLinkText}
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
