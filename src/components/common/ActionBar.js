import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './ActionBar.css';

class ActionBar extends PureComponent {
  render() {
    const {
      leftTo,
      leftLabel,
      rightTo,
      rightLabel,
      title,
      titleIcon
    } = this.props;

    return (
      <div className="action-bar">
        <Link to={leftTo}>{leftLabel}</Link>
        <span>
          {titleIcon}
          <div className="title">{title}</div>
        </span>
        <Link to={rightTo}>{rightLabel}</Link>
      </div>
    )
  }
}

export default ActionBar;
