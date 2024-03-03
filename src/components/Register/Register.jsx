import React from "react";
import AuthForm from "../AuthForm/AuthForm";

export default function Register() {
  return (
    <AuthForm
      name={"register"}
      title={"Добро пожаловать!"}
      buttonText={"Зарегистрироваться"}
    />
  );
}

