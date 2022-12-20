import { useState, useEffect } from "react";
import axios from "axios";

export const UseGoogleLoginHook = ({ setShowModal }: any) => {
  axios.defaults.withCredentials = true;

  const handleGoogleLogin = async () => {
    const googleLoginUrl = "http://localhost:4000/auth/google";
    const googleLoginWindow = window.open(
      googleLoginUrl,
      " blank",
      "width=500,height=600"
    );
    setShowModal(false);
    setTimeout(() => {
      googleLoginWindow && googleLoginWindow.close();
    }, 1000);
  };

  return { handleGoogleLogin };
};