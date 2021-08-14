import React from "react";
import { Switch, Route } from "react-router-dom";

import ComicTable from "./components/ComicTable";
import Favorites from "./components/ComicFavorites";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ComicTable} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
}
