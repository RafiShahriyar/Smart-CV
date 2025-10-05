import { login, signup } from './actions'

import { Button } from "@/components/ui/button"
import {
  Card,

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  // return (
  //   <>

  //   <form>
  //     <label htmlFor="email">Email:</label>
  //     <input id="email" name="email" type="email" required />
  //     <label htmlFor="password">Password:</label>
  //     <input id="password" name="password" type="password" required />
  //     <button formAction={login}>Log in</button>
  //     <button formAction={signup}>Sign up</button>
  //   </form>
  //   </>
  // )


  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-neutral-900 from-60% via-sky-900 t0-80% to-sky-700 ">     
      <Card className="w-full max-w-sm bg-transparent text-white">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" name="password" required />
                </div>
              </div>
            
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <button  formAction={login} className="w-full">
              Login
            </button>
            <Button  className="w-full bg-sky-500 ">
              Login with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}