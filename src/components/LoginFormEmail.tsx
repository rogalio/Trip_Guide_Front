import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const LoginFormEmail = ({ setShowModal }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email: string = watch("email");
  const password: string = watch("password");

  const onSubmit = (): void => {
    axios
      .post("http://localhost:4000/login", {
        username: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setShowModal(false);
        }
      });
  };

  // check if user session is valid using passport-js

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-2"
    >
      <div>
        <p className=" text-c3">Email adress</p>
        <input
          {...register("email", { required: true })}
          className="w-full p-1 rounded-lg bg-c6"
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <p className="text-c3">Password</p>
        <input
          {...register("password", { required: true })}
          className="w-full p-1 rounded-lg bg-c6"
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <button
        type="submit"
        className="bg-[#316BFF] rounded-md p-1  mx-full text-c8 mt-4 font-medium "
      >
        Sign in
      </button>
      <button
        type="button"
        className="bg-[#316BFF] rounded-md p-1  mx-full text-c8 mt-4 font-medium "
      />
    </form>
  );
};

export default LoginFormEmail;
