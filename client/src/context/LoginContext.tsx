import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { useModalContext } from "./ModalContext";
import * as Type from "../types/LoginContextTypes";

type LoginContextValues = {
  currentUser: Type.CurrentLoggedUser | null;
  loginUser: (user: Type.LoginUser) => void;
  createUser: (user: Type.CreatedUser) => void;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<Type.CurrentLoggedUser | null>
  >;
  isLoading: boolean;
};

type Props = {
  children: React.ReactNode;
};

const LoginContext = createContext<null | LoginContextValues>(null);

const LoginContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<Type.CurrentLoggedUser | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState("");
  const { closeModal } = useModalContext();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const createUser = async (user: Type.CreatedUser) => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/users/create`, user);
      setCurrentUser(response.data);
      // console.log(response.data);

      setErrorMsg("");
      closeModal();
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = async (user: Type.LoginUser) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/users/login`, user);
      // console.log(response.data);
      setCurrentUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.token);
      setErrorMsg("");
      closeModal();
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        currentUser,
        loginUser,
        errorMsg,
        createUser,
        setErrorMsg,
        setCurrentUser,
        isLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("This component is not wrapped in LoginContextProvider");
  }
  return context;
};

export default LoginContextProvider;
