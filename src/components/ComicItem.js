import React from "react";

const ComicItem = ({ item }) => {
  const favorite = (item) => {
    // getting the previous element and adding the new favorite item
    var previousData = JSON.parse(localStorage.getItem("favorites"));
    previousData.push(item);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };

  return (
    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          <img src={item.thumbnail.path + ".jpg"} alt="" />
        </div>
        <div className="content-back">
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Title:</strong> {item.title}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            <li>
              <button type="button" onClick={() => favorite(item)}>
                Favorite
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComicItem;
