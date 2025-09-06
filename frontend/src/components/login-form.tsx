import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authUser, getUser } from "@/api/userApi";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthenticUser, useUser } from "@/hooks/useUsers";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

type loginFormInput = {
  email: string;
  password: string;
};
//rewrite this mess
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { login: loginContext } = useAuth();
  // const [userId, setUserId] = useState("");
  const { login, isFetching, isError, error, user } = useAuthenticUser();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  // const { user, isFetching, isError } = useUser(userId); // ✅ Hook used properly
  // if (user !== undefined) {
  //   login(user);
  // }

  // async function handleSubmit(e) {
  //   //not displaying on submit the console log meaning not being called properly
  //   e.preventDefault();
  //   console.log("hi");
  //   const userId = await authUser(email, password);
  //   await console.log(userId);
  //   // const user = await getUser(userId);
  //   setUserId(userId);
  //   await console.log(user);
  //   console.log("cuser", currentUser);
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormInput>();

  async function onSubmit(data: loginFormInput) {
    const { email, password } = data;
    let returnedUser = await login({ email, password });
    if (returnedUser) {
      console.log("hi", returnedUser);
      loginContext(returnedUser);
      if (location === "/login") {
        navigate("/");
      }
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {isFetching && <p>Loging in...</p>}
      {isError && <p>{error?.message}</p>}
      {user && <p>Success</p>}
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("email", {
                    required: "Email is required",
                    minLength: {
                      value: 5,
                      message: "whats this",
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "Password length must be greater than 5",
                    },
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
