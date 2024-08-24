import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { useModalContext } from "./ModalContext";
import * as Type from "../types/LoginContextTypes";
import { toast } from "react-toastify";

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
  currentLoggedUser(): Promise<void>;
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

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      currentLoggedUser();
    }
  }, [token]);

  const createUser = async (user: Type.CreatedUser) => {
    try {
      setIsLoading(true);
      await axios.post(`/users/create`, user);
      setErrorMsg("");
      toast.success("User has been created!");
      closeModal();
    } catch (error: any) {
      toast.error(error.response?.data.message, {
        autoClose: 3000,
      });
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
      localStorage.setItem("token", response.data.token);
      setErrorMsg("");
      toast.success("Login successful");
      closeModal();
    } catch (error: any) {
      toast.error(error.response?.data.message, {
        autoClose: 3000,
      });
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  async function currentLoggedUser() {
    try {
      const { data } = await axios.get("/users/currentUser");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  }

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
        currentLoggedUser,
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
