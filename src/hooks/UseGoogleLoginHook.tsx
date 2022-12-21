import axios from "axios";

export const UseGoogleLoginHook = ({ setShowModal, isAuthenticated }: any) => {
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
    if (isAuthenticated) {
      googleLoginWindow && googleLoginWindow.close();
    }
  };

  return { handleGoogleLogin };
};
