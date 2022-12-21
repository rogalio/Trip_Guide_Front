import axios from "axios";
import { useForm } from "react-hook-form";

const LoginFormEmail = ({ setShowModal, setShowRegisterForm }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email: string = watch("email");
  const password: string = watch("password");

  const onSubmit = (): void => {
    axios.defaults.withCredentials = true;

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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-2 "
    >
      <div>
        <p className=" text-c3 dark:text-c8">Email adress</p>
        <input
          {...register("email", { required: true })}
          className="w-full p-1 rounded-lg bg-c6 dark:bg-c2 placeholder:text-sm"
          type="email"
          placeholder="Entrez votre email"
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <p className="text-c3 dark:text-c8">Password</p>
        <input
          {...register("password", { required: true })}
          className="w-full p-1 rounded-lg bg-c6 placeholder:text-sm dark:bg-c2"
          type="password"
          placeholder="Entrez votre mot de passe"
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <button
        type="submit"
        className="bg-[#316BFF] rounded-md p-1  mx-full text-c8 mt-4 font-medium "
      >
        Sign in
      </button>

      <p className="mx-auto mt-4 dark:text-c8">
        Dont have an account ?
        <span
          onClick={() => setShowRegisterForm(true)}
          className="text-[#316BFF] font-medium cursor-pointer ml-4 "
        >
          Sign up
        </span>
      </p>
    </form>
  );
};

export default LoginFormEmail;
