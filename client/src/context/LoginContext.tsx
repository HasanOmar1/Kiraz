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
};

type Props = {
  children: React.ReactNode;
};

const LoginContext = createContext<null | LoginContextValues>(null);

const LoginContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<Type.CurrentLoggedUser | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");
  const { closeModal } = useModalContext();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get("/users");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (user: Type.CreatedUser) => {
    try {
      const response = await axios.post(`/users/create`, user);
      console.log(response.data);
      setErrorMsg("");
      closeModal();
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    }
  };

  const loginUser = async (user: Type.LoginUser) => {
    try {
      const response = await axios.post(`/users/login`, user);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(response.data);
      setErrorMsg("");
      closeModal();
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
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
