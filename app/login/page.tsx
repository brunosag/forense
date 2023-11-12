import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import Image from 'next/image';
import LoginForm from '../components/login/login-form';
import logo from '@/public/logo.svg';

export default function Login() {
  return (
    <div className="container min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-md border-none">
        <CardHeader className="items-center">
          <Image src={logo} alt="SBCB Lab Logo" className="w-16 h-16 mb-3" />
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Please enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
