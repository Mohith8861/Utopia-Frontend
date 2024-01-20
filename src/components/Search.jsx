import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    navigate("/tours/" + query);
  };

  return (
    <form className="nav__search" onSubmit={handleFormSubmit}>
      <button className="nav__search-btn">
        <svg>
          <use xlinkHref="img/icons.svg#icon-search"></use>
        </svg>
      </button>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search tours"
        className="nav__search-input"
      />
    </form>
  );
}
