import axios from "axios";

export const UseGoogleLoginHook = ({ setShowModal }: any) => {
  axios.defaults.withCredentials = true;

  const handleGoogleLogin = async () => {
    const googleLoginUrl =
      "https://tripguideback-production.up.railway.app/auth/google";
    const googleLoginWindow = window.open(
      googleLoginUrl,
      " blank",
      "width=500,height=600"
    );
    setShowModal(false);
    setTimeout(() => {
      googleLoginWindow && googleLoginWindow.close();
    }, 3000);
  };

  return { handleGoogleLogin };
};
