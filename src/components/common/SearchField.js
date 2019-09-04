import React, { PureComponent } from 'react';

import './SearchField.css';

class SearchField extends PureComponent {
  render() {
    const { label, value, onChange } = this.props;

    return (
      <div className="search-field-component">
        <span className="label">{label}</span>
        <input value={value} onChange={onChange} />
      </div>
    );
  }
}

export default SearchField;
