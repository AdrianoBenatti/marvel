import React, { useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Find a Comic"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </form>
      <a className="button-favorites" href="/">
        Favorites
      </a>
    </section>
  );
};

export default Search;
