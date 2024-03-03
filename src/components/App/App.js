/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Menu from "../Menu/Menu";
import PageNotFound from "../PageNotFound/PageNotFound";
import { initialCards, moviesFavorite } from "../../utils/constants";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [initialMovies, setInitialMovies] = useState(initialCards);
  const [currentUser, setCurrentUser] = useState({});
  const [ErrorPage, setErrorPage] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  const location = useLocation();
  const { pathname } = location;

  const handleToggleMenu = () => {
    setCloseMenu((prevMenuState) => !prevMenuState);
  };

  const handleSizeWindow = () => {
    setIsMobile(window.innerWidth <= 500);
    setIsTablet(window.innerWidth > 500 && window.innerWidth <= 768);
  };

  useEffect(() => {
    const resizeWindow = window.addEventListener("resize", handleSizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div className="app__center">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname !== "/signin" && pathname !== "/signup" && !ErrorPage && (
          <Header loggedIn={loggedIn} handleToggleMenu={handleToggleMenu} />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies initialMovies={initialMovies} isTablet={isTablet} isMobile={isMobile}/>} />
          <Route path="/saved-movies" element={<SavedMovies initialMovies={moviesFavorite} isTablet={isTablet} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound setErrorPage={setErrorPage} />} />
        </Routes>
        {(pathname === "/" || pathname === "/movies" || pathname === "/saved-movies") && <Footer />}
        <Menu handler={closeMenu} handleToggleMenu={handleToggleMenu} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;