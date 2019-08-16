import React, { PureComponent } from 'react';

import './BottomNavigation.css';

class BottomNavigation extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="bottom-navigation">
        {/* BottomNavigation {children && children.length} */}
        {children}
      </div>
    );
  }
}

export default BottomNavigation;
