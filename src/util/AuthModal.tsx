import { useEffect, useState } from "react";
import rectangle from "../asset/rectangle.png";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import LoginFormEmail from "../components/LoginFormEmail";
import { UseGoogleLoginHook } from "../hooks/UseGoogleLoginHook";
import RegisterFormEmail from "../components/RegisterFormEmail";
import { UseIsAuthenticated } from "../hooks/UseIsAuthenticated";

export const AuthModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const { checkUser, isAuthenticated } = UseIsAuthenticated({ setShowModal });
  const { handleGoogleLogin } = UseGoogleLoginHook({
    setShowModal,
    isAuthenticated,
  });

  useEffect(() => {
    checkUser();
    if (!isAuthenticated) {
      setShowModal(true);
    }
  }, [checkUser, isAuthenticated]);

  if (showModal) {
    return (
      <div>
        <div className="fixed top-0 left-0 z-40 w-full h-full cursor-pointer opacity-80 bg-c1 " />
        <div className="fixed left-1/2 right-1/2 top-[45%] w-[90%]   md:w-1/2 lg:w-1/3 translate-x-[-50%] translate-y-[-50%] bg-c9 rounded-xl z-40 bg-blend-overlay p-6 font-DmSans shadow-lg dark:bg-c1">
          <CloseIcon
            className="absolute z-50 rounded-full shadow-sm cursor-pointer bg-c7 text-c4 top-2 right-2 dark:bg-c3 dark:text-c6"
            onClick={() => setShowModal(false)}
          />
          <div className="flex flex-col justify-center gap-2 ">
            <h1 className="mx-auto text-2xl font-bold dark:text-c8">
              Welcome Back !👋
            </h1>

            <button
              onClick={handleGoogleLogin}
              className="bg-[#316BFF]   rounded-md p-1 w-3/4 mx-auto text-c8 font-medium "
            >
              <div className="flex justify-center">
                <GoogleIcon className="py-1 mr-2 " />
                <p> Sign in with Google</p>
              </div>
            </button>

            <div className="flex items-center justify-center gap-2 mt-2 text-c4">
              <img src={rectangle} alt="" className="h-[2px] " />
              <p className="dark:text-c6">or </p>
              <img src={rectangle} alt="" className="h-[2px] " />
            </div>
          </div>
          {!showRegisterForm ? (
            <LoginFormEmail
              setShowModal={setShowModal}
              setShowRegisterForm={setShowRegisterForm}
            />
          ) : (
            <RegisterFormEmail
              setShowModal={setShowModal}
              setShowRegisterForm={setShowRegisterForm}
            />
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
