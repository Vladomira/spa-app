import { useState } from "react";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [imgName, setImgName] = useState("");

  const handleChange = (e) => {
    setImgName(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imgName.trim() === "") {
      alert("Please, type what do you want to see.");
      return;
    }
    onSubmit(imgName); // отпарвка данных
    setImgName(""); // очищение формы
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleChange}
          value={imgName}
          name="imgName"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
