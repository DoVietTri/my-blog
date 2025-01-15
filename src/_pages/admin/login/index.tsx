"use client";

import { ILoginPayload } from "@/interfaces/auth";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "@/utils/validationSchema";
import clsx from "clsx";
import { loginAction } from "@/actions/auth";

export const Login = () => {
  const {
    control,
    formState: { errors, isLoading },
    handleSubmit,
  } = useForm<ILoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signinSchema),
    mode: "all",
  });

  return (
    <div className="h-screen flex justify-center items-center mx-4">
      <div className="bg-[#242526] p-4 md:p-10 w-full md:w-[600px] rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-bold uppercase">
            Đăng nhập
          </h1>
          <h2 className="text-center text-lg">Hệ thống quản lý</h2>
        </div>
        <form
          onSubmit={handleSubmit(loginAction)}
          className="mt-9 flex flex-col gap-4"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <label
                  className={clsx(
                    "input input-bordered flex items-center gap-2",
                    {
                      "input-error": errors.email,
                    }
                  )}
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                  </button>
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    autoComplete="off"
                    autoFocus={true}
                    tabIndex={1}
                    type="text"
                    className="grow"
                    placeholder="Input..."
                  />
                </label>
                {errors.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <label
                  className={clsx(
                    "input input-bordered flex items-center gap-2",
                    {
                      "input-error": errors.password,
                    }
                  )}
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    tabIndex={2}
                    autoComplete="new-password"
                    type="password"
                    className="grow"
                    placeholder="Input..."
                  />
                </label>
                {errors.password && (
                  <small className="text-red-500">
                    {errors.password.message}
                  </small>
                )}
              </div>
            )}
          />

          <button
            disabled={isLoading}
            tabIndex={3}
            className="btn"
            type="submit"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};
