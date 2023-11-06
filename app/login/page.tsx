import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import LoginForm from './login-form';

export default function Login() {
  return (
    <div className="container min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-md border-none">
        <CardHeader className="text-center">
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
