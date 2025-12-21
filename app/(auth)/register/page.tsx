"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { api } from "../../lib/api";
import { saveAuth } from "../../lib/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const registerSchema = z
  .object({
    name: z.string().nonempty("Full Name is required"),
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Password must include a lowercase letter")
      .regex(/[A-Z]/, "Password must include an uppercase letter")
      .regex(/[0-9]/, "Password must include a number")
      .regex(/[^A-Za-z0-9]/, "Password must include a special character"),
    password_confirmation: z.string().nonempty("Confirm Password is required"),
    mobile_country_code: z.string().nonempty("Country code is required"),
    mobile: z.string().nonempty("Phone number is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password confirmation must match password",
    path: ["password_confirmation"],
  });

type RegisterFormInputs = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const MySwal = withReactContent(Swal);

const onSubmit = async (data: RegisterFormInputs) => {
  try {
    const res = await api.post("/auth/register", data);
    const user = res.data.data;

    saveAuth(user.token, user);

    if (!user.email_verified_at) router.push("/verify");
    else router.push("/dashboard");
  } catch (err: unknown) {
    let message = "Registration failed. Please check your data.";
    if (axios.isAxiosError(err)) {
      message = err.response?.data?.message || message;
    }

    MySwal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            placeholder="Full Name"
            {...register("name")}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("password_confirmation")}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password_confirmation && (
            <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>
          )}

          <div className="flex gap-2">
            <input
              placeholder="Country Code"
              {...register("mobile_country_code")}
              className="w-1/3 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Phone Number"
              {...register("mobile")}
              className="w-2/3 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {(errors.mobile_country_code || errors.mobile) && (
            <p className="text-red-500 text-sm">
              {errors.mobile_country_code?.message || errors.mobile?.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
