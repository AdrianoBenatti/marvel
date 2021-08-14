import React from "react";
import ComicItem from "./ComicItem";

const ComicFavorites = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className="contents">teste</section>
  );
};

export default ComicFavorites;
