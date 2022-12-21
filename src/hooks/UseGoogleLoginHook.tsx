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
    if (isAuthenticated) {
      googleLoginWindow && googleLoginWindow.close();
      setShowModal(false);
    }
  };

  return { handleGoogleLogin };
};
