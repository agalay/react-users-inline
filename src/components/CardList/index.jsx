import React from "react";
import { Card } from "../";

import "./CardList.scss";

const CardList = ({ items, onRemove }) => {
  return (
    <div className="card-list">
      {items
        ? items
            .sort((a, b) => (a.name > b.name ? 1 : a.name <= b.name ? -1 : 0))
            .map(user => <Card key={user.id} {...user} onRemove={onRemove} />)
        : "Loading..."}
    </div>
  );
};

export default CardList;
