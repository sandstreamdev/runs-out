import React, { PureComponent } from 'react';

import './SearchField.css';

class SearchField extends PureComponent {
  render() {
    const { label } = this.props;

    return (
      <div className="search-field-component">
        <span className="label">{label}</span>
        <input />
      </div>
    );
  }
}

export default SearchField;
