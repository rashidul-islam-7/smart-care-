export const metadata = {
  title: "Sign Up | SmartCare+",
  description:
    "Create your SmartCare+ account to manage appointments and healthcare easily.",
};

import AuthImg from "@/components/ui/AuthImg";
import Logo from "@/components/ui/Logo";
import SignUpClient from "./SignUpClient";

const SignUpPage = () => {
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
                  Join SmartCare+
                </h1>

                <p className="text-gray-500 text-sm mt-2">
                  Start managing your healthcare in one place
                </p>
              </div>

              {/* form */}
              <SignUpClient />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="relative hidden lg:block">
          <AuthImg />

          <div className="absolute bottom-0 p-14 text-white max-w-lg">
            <h2 className="text-4xl font-black leading-tight">
              Start your health journey today
            </h2>

            <p className="mt-4 text-white/80">
              Book doctors, manage prescriptions, and track your health—all in
              one smart platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
