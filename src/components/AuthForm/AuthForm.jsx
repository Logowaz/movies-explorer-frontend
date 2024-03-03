import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./authForm.css";

function AuthForm({
  name,
  title,
  buttonText,
  handleCheckRegister,
  handleCheckLogin,
}) {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
    name: "",
  });

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { password, email, name } = formValue;
    if (name === "register") {
      handleCheckRegister(password, email, name);
    } else {
      handleCheckLogin(password, email);
    }
  };

  return (
    <header className="auth__container">
      <form
        name={`${name}-form`}
        className="form__auth"
        onSubmit={handleSubmit}
        noValidate
      >
        <Link to="/" className="logo-auth"></Link>
        <h2 className="form__title-auth">{title}</h2>

        {name === "register" && (
          <div className="input-block">
            <div className="input-name">Имя</div>
            <input
              id="input-name"
              type="text"
              placeholder="Имя"
              name="name"
              minLength={2}
              maxLength={30}
              required
              className="form__item-auth form__item_el_name"
              onChange={handleChangeInput}
              value={formValue.name || ""}
            />
            <span id="input-name-error" className="popup__error"></span>
          </div>
        )}

        <div className="input-block">
          <div className="input-name">E-mail</div>
          <input
            id="input-email"
            type="email"
            placeholder="E-mail"
            name="email"
            minLength={2}
            maxLength={50}
            required
            className="form__item-auth form__item_el_email"
            onChange={handleChangeInput}
            value={formValue.email || ""}
          />
          <span id="input-email-error" className="popup__error"></span>
        </div>

        <div className="input-block">
          <div className="input-name">Пароль</div>
          <input
            id="input-password"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength={2}
            maxLength={40}
            required
            className="form__item-auth form__item_el_password"
            onChange={handleChangeInput}
            value={formValue.password || ""}
          />
          <span id="input-password-error" className="popup__error">
            Что-то пошло не так...
          </span>
        </div>

        <button
          type="submit"
          className={`${
            name === "register" ? "auth__submit" : "auth__submit_signin"
          }`}
        >
          {buttonText}
        </button>
      </form>

      <div className="auth__link">
        <p className="auth__question">
          {name === "register"
            ? "Уже зарегистрированы?"
            : "Ещё не зарегестрированы?"}
        </p>
        <Link
          to={name === "register" ? "/signin" : "/signup"}
          className="button__signin"
        >
          {name === "register" ? "Войти" : "Регистрация"}
        </Link>
      </div>
    </header>
  );
}

export default AuthForm;
