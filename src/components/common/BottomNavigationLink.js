import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './BottomNavigationLink.css';

class BottomNavigationLink extends PureComponent {
  render() {
    const { active, icon, label, to } = this.props;
    let className = "bottom-navigation-link";
    if (active) {
      className += " active";
    }

    return (
      <Link to={to} className={className}>
        {icon}
        <span className="label">{label}</span>
      </Link>
    );
  }
}

export default BottomNavigationLink;
