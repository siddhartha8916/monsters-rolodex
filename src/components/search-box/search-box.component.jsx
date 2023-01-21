import React, { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, value, type, placeholder } = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          onChange={onChangeHandler}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default SearchBox;
