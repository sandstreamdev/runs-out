import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './NewItemLink.css';

class NewItemLink extends PureComponent {
  render() {
    const { label, to } = this.props;

    return (
      <Link className="new-item-link" to={to}>
        <div className="fake-input">
          {label}
        </div>
      </Link>
    );
  }
}

export default NewItemLink;
