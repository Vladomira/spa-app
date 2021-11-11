import { useState } from "react";

export default function SearchForm({ onSubmit }) {
  const [userId, setUserId] = useState("");
  // console.log(userId, "from form");
  const handleChange = (e) => {
    setUserId(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(userId);
    setUserId("");
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={handleChange}
            value={userId}
            name="userData"
            type="number"
            autoComplete="off"
            autoFocus
            placeholder="Input number"
          />
        </form>
      </header>
    </>
  );
}
