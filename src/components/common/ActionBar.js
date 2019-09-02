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
        <Link to={leftTo} className="left-action">{leftLabel}</Link>
        <div>
          {titleIcon}
          <div className="title">{title}</div>
        </div>
        <Link to={rightTo} className="right-action">{rightLabel}</Link>
      </div>
    )
  }
}

export default ActionBar;
