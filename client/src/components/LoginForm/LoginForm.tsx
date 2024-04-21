import React from "react";
import LoginInputs from "../LoginInputs/LoginInputs";

type inputsArrayType = {
  name: string;
  svg: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type LoginFormProps = {
  inputsArray: inputsArrayType[];
  isRegister: boolean;
  handleRegister: (e: React.FormEvent) => void;
  handleLogIn: (e: React.FormEvent) => void;
  nameSvg: string;
  nameValue: string;
  handleChangeNameValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const LoginForm = ({
  inputsArray,
  isRegister,
  handleRegister,
  handleLogIn,
  nameSvg,
  nameValue,
  handleChangeNameValue,
}: LoginFormProps) => {
  return (
    <form onSubmit={isRegister ? handleRegister : handleLogIn}>
      {isRegister && (
        <LoginInputs
          name="Name"
          svg={nameSvg}
          type="text"
          value={nameValue}
          onChange={handleChangeNameValue}
        />
      )}
      {inputsArray.slice(1).map((input) => {
        return (
          <LoginInputs
            key={input.name}
            name={input.name}
            svg={input.svg}
            type={input.type}
            value={input.value}
            onChange={input.onChange}
          />
        );
      })}

      <button type="submit" id="submit-btn">
        {isRegister ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};
