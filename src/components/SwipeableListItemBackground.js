import React, { PureComponent } from 'react';

import './SwipeableListItemBackground.css';

export const SwipeDirection = {
  LEFT: "left",
  RIGHT: "right"
}

export const SwipeColor = {
  GREEN: "green",
  RED: "red"
}

class SwipeableListItemBackground extends PureComponent {
  render() {
    const { color, direction, icon, label } = this.props;
    
    let className = "swipeable-list-item-background";
    className += ` ${direction}`;
    className += ` ${color}`;

    return (
      <div className={className}>
        <div className="content">
          {icon}
          <span>{label}</span>
        </div>
      </div>
    );
  }
}

export default SwipeableListItemBackground;
