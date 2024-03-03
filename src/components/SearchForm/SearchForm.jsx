import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search-form__container">
      <form className="search-form">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__submit"></button>
      </form>
      <FilterCheckbox className="filter-checkbox" />
      <span className="search-form__line"></span>
    </section>
  );
};

export default SearchForm;
