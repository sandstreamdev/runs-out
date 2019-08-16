import React, { PureComponent } from 'react';

import './SwipeableList.css';

class SwipeableList extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="swipeable-list">
        {children}
      </div>
    )
  }
}

export default SwipeableList;
