"use client";

import { Icon } from "@iconify/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { loginSchema, type LoginFormValues } from "@/composables/form/login";

const inputClass = "mt-2 h-[52px] w-full rounded-xl border border-[#d9dbe1] bg-white px-5 text-base text-[#24252b] outline-none transition placeholder:text-[#9397a2] focus:border-[#064BFF] focus:ring-2 focus:ring-[#064BFF]/15";

export default function LoginPage() {
  const [status, setStatus] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const onSubmit = async (_values: LoginFormValues) => {
    setStatus("Your details are valid. Sign-in service is not connected yet.");
  };

  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex min-h-[680px] w-full max-w-[580px] flex-col rounded-[24px] bg-white px-7 py-9 shadow-[0_20px_70px_rgba(0,0,0,.12)] sm:px-10 sm:py-12 lg:min-h-[784px] lg:px-16 lg:py-16">
        <div>
          <p className="text-base text-[#064BFF]">Sign In</p>
          <h2 className="mt-1 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-[44px]">Welcome Back</h2>
        </div>

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div>
            <label htmlFor="login-email" className="text-sm font-medium">Email</label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "login-email-error" : undefined}
              className={inputClass}
              {...register("email")}
            />
            {errors.email && <p id="login-email-error" className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div className="mt-5">
            <label htmlFor="login-password" className="text-sm font-medium">Password</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "login-password-error" : undefined}
              className={inputClass}
              {...register("password")}
            />
            {errors.password && <p id="login-password-error" className="mt-1.5 text-sm text-red-600">{errors.password.message}</p>}
          </div>
          <div className="mt-6 flex justify-end">
            <button type="submit" disabled={isSubmitting} className="min-h-12 min-w-[104px] rounded-full bg-[#D0FF00] px-6 text-base font-medium transition-colors hover:bg-[#c2ed00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF] disabled:opacity-60">
              Sign In
            </button>
          </div>
          {status && <p role="status" className="mt-3 text-right text-sm text-[#5f6069]">{status}</p>}
        </form>

        <div className="mt-12 flex items-center gap-3 text-sm text-[#858995] sm:mt-16">
          <span className="h-px flex-1 bg-[#dedfe3]" />
          <span>Or</span>
          <span className="h-px flex-1 bg-[#dedfe3]" />
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button type="button" aria-label="Continue with Facebook" className="grid size-[72px] place-items-center rounded-[22px] border border-[#d9dbe1] transition-colors hover:bg-[#f6f7fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF]">
            <Icon icon="logos:facebook" aria-hidden="true" className="size-8" />
          </button>
          <button type="button" aria-label="Continue with Google" className="grid size-[72px] place-items-center rounded-[22px] border border-[#d9dbe1] transition-colors hover:bg-[#f6f7fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF]">
            <Icon icon="logos:google-icon" aria-hidden="true" className="size-8" />
          </button>
        </div>

        <p className="mt-auto pt-10 text-center text-sm text-[#858995]">
          New user? <a href="/pages/register" className="text-[#064BFF] hover:underline">Create an account</a>
        </p>
      </div>
    </AuthLayout>
  );
}
