import React, { PureComponent } from 'react';

import './Drawer.css';

class Drawer extends PureComponent {
  handleContentClick = event => event.stopPropagation()

  render() {
    const { children, open, onHide } = this.props;

    const contentClassName = `content ${open ? "open" : "close"}`;
    const className = `drawer ${open ? "open" : "close"}`;

    return (
      <div className={className} onClick={onHide}>
        <div className={contentClassName} onClick={this.handleContentClick}>{children}</div>
      </div>
    );
  }
}

export default Drawer;
