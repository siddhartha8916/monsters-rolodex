import React, { Component } from "react";
import UserCard from "./user-card.component";

import "./card-list.styles.css";

export class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="card-list">
        {users.map((user) => {
          const { id, name, email } = user;
          return <UserCard key={id} name={name} email={email}  />;
        })}
      </div>
    );
  }
}

export default CardList;
