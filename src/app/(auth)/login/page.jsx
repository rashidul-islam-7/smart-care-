export const metadata = {
  title: "LogIn | SmartCare+",
  description:
    "Create your SmartCare+ account to manage appointments and healthcare easily.",
};

import Logo from "@/components/ui/Logo";
import AuthImg from "@/components/ui/AuthImg";
import LoginClient from "./LoginClient";

const SignInPage = () => {
  return (
    <section className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        {/* left side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <div className="mb-8">
                <Logo />

                <h1 className="mt-3 text-3xl font-black text-gray-700">
                  Welcome back
                </h1>

                <p className="text-gray-500 mt-2 text-sm">
                  Sign in to continue your health dashboard
                </p>
              </div>

              {/* form */}
              <LoginClient />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="relative hidden lg:block">
          <AuthImg />

          <div className="absolute bottom-0 p-14 text-white max-w-lg">
            <h2 className="text-4xl font-black leading-tight">
              Healthcare made simple
            </h2>

            <p className="mt-4 text-white/80">
              Manage appointments, prescriptions and reports in one secure
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
