import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { className, placeholder, onSearchHandler } = this.props;

    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    );
  }
}

export default SearchBox;
