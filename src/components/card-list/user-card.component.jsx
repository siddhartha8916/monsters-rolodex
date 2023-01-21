import React, { Component } from "react";

import "./card.styles.css";

export class UserCard extends Component {
  render() {
    const {name, email}= (this.props);
    return (
      <div className="card-container">
        <img src={`https://api.multiavatar.com/${name}.svg`} alt={name} />
        <h2>{name}</h2>
        <p>{email.toLowerCase()}</p>
      </div>
    );
  }
}

export default UserCard;
