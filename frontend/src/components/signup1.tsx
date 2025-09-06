import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateUser } from "@/hooks/useUsers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

interface Signup1Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

type formInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup1 = ({
  heading = "Signup",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Create Account",
  signupText = "Already a user?",
  signupUrl = "/login",
}: Signup1Props) => {
  const { user, signUp, isFetching, isError } = useCreateUser();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInput>();

  const password = watch("password", "");

  async function onSubmit(data: formInput) {
    const { email, password } = data;
    const user = await signUp({ email, password });
    console.log(user);
  }

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <section className="bg-muted h-screen">
      {isFetching && <p>Signing you up....</p>}
      {isError && <p>Error happened...</p>}
      {user && <p>Success</p>}
      <div className="flex h-full items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <a href={logo.url}>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
            />
          </a>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
          >
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <Input
              type="email"
              placeholder="Email"
              className="text-sm"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              type="password"
              placeholder="Password"
              className="text-sm"
              required
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "password length must be greater than 4",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Input
              type="password"
              placeholder="Confirm Password"
              className="text-sm"
              required
              {...register("confirmPassword", {
                required: "confirm password is required",
                validate: (value) =>
                  value === password || "Not same as Password field",
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          </form>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <Link
              to={signupUrl}
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup1 };
