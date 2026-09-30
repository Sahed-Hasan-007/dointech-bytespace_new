"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { registerSchema, type RegisterFormValues } from "@/composables/form/register";

const inputClass = "mt-2 h-[52px] w-full rounded-xl border border-[#d9dbe1] bg-white px-5 text-base text-[#24252b] outline-none transition placeholder:text-[#9397a2] focus:border-[#064BFF] focus:ring-2 focus:ring-[#064BFF]/15";

export default function RegisterPage() {
  const [status, setStatus] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: { fullName: "", email: "", password: "" },
    mode: "onTouched",
  });

  const onSubmit = async (_values: RegisterFormValues) => {
    setStatus("Your details are valid. Account creation is not connected yet.");
  };

  return (
    <AuthLayout
      eyebrow="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="flex min-h-[680px] w-full max-w-[580px] flex-col rounded-[24px] bg-white px-7 py-9 shadow-[0_20px_70px_rgba(0,0,0,.12)] sm:px-10 sm:py-12 lg:min-h-[784px] lg:px-16 lg:py-16">
        <div>
          <p className="text-base text-[#064BFF]">Create an Account</p>
          <h2 className="mt-1 max-w-[400px] text-4xl font-semibold leading-[1.18] tracking-[-0.035em] sm:text-[44px]">Welcome to ByteSpace</h2>
        </div>

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-9">
          <div>
            <label htmlFor="register-name" className="text-sm font-medium">Full Name</label>
            <input
              id="register-name"
              type="text"
              autoComplete="name"
              placeholder="Jamie Davis"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "register-name-error" : undefined}
              className={inputClass}
              {...register("fullName")}
            />
            {errors.fullName && <p id="register-name-error" className="mt-1.5 text-sm text-red-600">{errors.fullName.message}</p>}
          </div>
          <div className="mt-5">
            <label htmlFor="register-email" className="text-sm font-medium">Email</label>
            <input
              id="register-email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "register-email-error" : undefined}
              className={inputClass}
              {...register("email")}
            />
            {errors.email && <p id="register-email-error" className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div className="mt-5">
            <label htmlFor="register-password" className="text-sm font-medium">Password</label>
            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "register-password-error" : undefined}
              className={inputClass}
              {...register("password")}
            />
            {errors.password && <p id="register-password-error" className="mt-1.5 text-sm text-red-600">{errors.password.message}</p>}
          </div>
          <div className="mt-6 flex justify-end">
            <button type="submit" disabled={isSubmitting} className="min-h-12 min-w-[122px] rounded-full bg-[#D0FF00] px-6 text-base font-medium transition-colors hover:bg-[#c2ed00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF] disabled:opacity-60">
              Continue
            </button>
          </div>
          {status && <p role="status" className="mt-3 text-right text-sm text-[#5f6069]">{status}</p>}
        </form>

        <p className="mt-auto pt-10 text-center text-sm text-[#5f6069]">
          Already have an account? <a href="/login" className="text-[#064BFF] hover:underline">Login</a>
        </p>
      </div>
    </AuthLayout>
  );
}
