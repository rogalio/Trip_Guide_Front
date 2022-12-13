import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import rectangle from "../asset/rectangle.png";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import LoginFormEmail from "../components/LoginFormEmail";

export const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // fonction to get axios request
  const handleGoogleLogin = async () => {
    const googleLoginUrl = "http://localhost:4000/auth/google";
    const newWindow = window.open(
      googleLoginUrl,
      "_blank",
      "width=600,height=600"
    );
    if (newWindow) {
      newWindow.focus();
    }
    const { data } = await axios.get(googleLoginUrl);
    console.log(data);
  };

  if (showModal) {
    return (
      <div className="mx-6 ">
        <div className="fixed top-0 left-0 w-full h-full cursor-pointer opacity-80 bg-c1" />
        <div className="fixed left-1/2 right-1/2 top-[45%] w-[90%]   md:w-1/2 lg:w-1/2 translate-x-[-50%] translate-y-[-50%] bg-c9 rounded-xl z-40 bg-blend-overlay p-6 font-DmSans shadow-lg">
          <CloseIcon
            className="absolute z-50 rounded-full shadow-sm cursor-pointer bg-c7 text-c4 top-2 right-2 "
            onClick={() => setShowModal(false)}
          />
          <div className="flex flex-col justify-center gap-2 ">
            <h1 className="mx-auto text-2xl font-bold">Welcome Back !👋</h1>

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
              <p className="">or continue with </p>
              <img src={rectangle} alt="" className="h-[2px] " />
            </div>
          </div>
          <LoginFormEmail setShowModal={setShowModal} />

          <p className="mx-auto mt-4">
            Dont have an account ?{" "}
            <span className="text-[#316BFF] font-medium cursor-pointer ">
              Sign up
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
