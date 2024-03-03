/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(true);
  const [validationProfile, setValidationProfile] = useState(false);

  const saveProfile = useCallback(() => {
    setEditMode(true);
  }, []);

  const logOut = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const editProfile = useCallback(() => {
    setEditMode(false);
  }, []);

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Игорь!</h2>
      {editMode ? (
        <>
          <div className="profile__info">
            <p className="profile__user-data">Имя</p>
            <p className="profile__value">Игорь</p>
          </div>
          <div className="profile__info">
            <p className="profile__user-data">E-mail</p>
            <p className="profile__value">pochta@yandex.ru</p>
          </div>
          <button type="button" className="button__edit" onClick={editProfile}>
            Редактировать
          </button>
          <button type="button" className="button__logout" onClick={logOut}>
            Выйти из аккаунта
          </button>
        </>
      ) : (
        <>
          <form className="profile__info-edit">
            <label className="profile__user-data">Имя</label>
            <input
              type="text"
              className="profile__value-edit"
              defaultValue="Игорь"
            />
          </form>
          <form className="profile__info-edit">
            <label className="profile__user-data">E-mail</label>
            <input
              className="profile__value-edit"
              defaultValue="pochta@yandex.ru"
            />
          </form>
          {validationProfile ? (
            <div className="profile__save">
              <span className="profile__error">
                При обновлении профиля произошла ошибка.
              </span>
              <button
                type="button"
                className="button__save-profile button__save-profile_error"
              >
                Сохранить
              </button>
            </div>
          ) : (
            <button type="button" className="button__save-profile" onClick={saveProfile}>
              Сохранить
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default Profile;
