"use client";

import Link from "next/link";
import {
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { TiArrowSync } from "react-icons/ti";

const SignUpClient = () => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
      callbackURL: "/login",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      router.push("/login");
      toast.success("Successfully Create Account!");
    }
    setLoading(false);
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    // setGoogleLoading(false);
  };

  return (
    <div>
      {/* form */}
      <form onSubmit={onSubmit} className="flex w-auto flex-col gap-4">
        {/* name */}
        <TextField isRequired name="name" type="text">
          <Label>Username</Label>

          <Input
            className="w-full"
            aria-label="Name"
            placeholder="Enter your username"
          />
        </TextField>

        {/* image */}
        <TextField name="image" type="url" className="w-full">
          <Label htmlFor="image">Image URL</Label>

          <Input
            id="image"
            className="w-full"
            placeholder="https://example.com/image.jpg"
          />

          <FieldError>Please enter a valid image URL</FieldError>
        </TextField>

        {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>

          <Input className="w-full" placeholder="john@example.com" />

          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }

            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <Input className="w-full" placeholder="Enter your password" />

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        {/* terms */}
        <label className="flex items-start gap-2 text-sm text-gray-600">
          I agree to the Terms & Privacy Policy
        </label>

        {/* submit btn */}
        <button
          disabled={loading}
          type="submit"
          className="cursor-pointer w-full h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        {/* divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-slate-200 flex-1"></div>

          <span className="text-xs text-gray-400">OR</span>

          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="cursor-pointer w-full h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-medium transition flex items-center justify-center gap-3"
        >
          <FcGoogle />
          {googleLoading ? " Creating account.." : "Continue with Google"}
        </button>

        {/* footer */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpClient;
