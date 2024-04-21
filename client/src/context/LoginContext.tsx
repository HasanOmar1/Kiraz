import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { useModalContext } from "./ModalContext";

type CreatedUser = {
  name: string;
  email: string;
  password: string;
};

type LoginUser = Omit<CreatedUser, "name">;

type CurrentLoggedUser = Omit<CreatedUser, "password"> & {
  token: string;
  _id: string;
};

type LoginContextValues = {
  currentUser: CurrentLoggedUser | null;
  loginUser: (user: LoginUser) => void;
  createUser: (user: CreatedUser) => void;
  errorMsg: string;
};

type Props = {
  children: React.ReactNode;
};

const LoginContext = createContext<null | LoginContextValues>(null);

const LoginContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentLoggedUser | null>(
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

  const createUser = async (user: CreatedUser) => {
    try {
      const response = await axios.post(`/users/create`, user);
      console.log(response.data);
      setErrorMsg("");
      closeModal();
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      console.log(error.response?.data.message);
    }
  };

  const loginUser = async (user: LoginUser) => {
    try {
      const response = await axios.post(`/users/login`, user);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(response.data);
      setErrorMsg("");
      closeModal();
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      console.log(error.response?.data.message);
    }
  };
  return (
    <LoginContext.Provider
      value={{ currentUser, loginUser, errorMsg, createUser }}
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
