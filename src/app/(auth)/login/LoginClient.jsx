"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import AuthImg from "@/components/ui/AuthImg";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiArrowSync } from "react-icons/ti";

const LoginClient = () => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/dashboard",
    });

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }
    if (data) {
      router.push("/");
      toast.success("Successfully Login!");
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    // setGoogleLoading(false);
    // toast.success("Successfully Login!");
  };

  return (
    <div>
      <form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
          <FieldError />

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
        </TextField>

        <p className="text-red-500">{error?.message}</p>

        {/* remember */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-blue-600" />
            Remember me
          </label>
        </div>

        {/* button */}
        <button
          disabled={loading}
          type="submit"
          className="w-full h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition disabled:opacity-70"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {/* divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-slate-200 flex-1"></div>

          <span className="text-xs text-gray-400">OR</span>

          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {/* google */}
        <button
          disabled={googleLoading}
          onClick={handleGoogleSignIn}
          type="button"
          className="cursor-pointer w-full h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-medium transition flex items-center justify-center gap-3 disabled:opacity-70"
        >
          <FcGoogle />

          {googleLoading ? "Signing In..." : "Continue with Google"}
        </button>

        {/* footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginClient;
