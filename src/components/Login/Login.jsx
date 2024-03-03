import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <AuthForm 
    name={"login"} 
    title={"Рады видеть!"} 
    buttonText={"Войти"} />
  );
}

export default Login;
