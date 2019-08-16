import React, { PureComponent } from 'react';

import { ReactComponent as BellIcon } from '../images/bell-ring-outline.svg';
import { ReactComponent as MenuIcon } from '../images/menu.svg';
import './TitleBar.css';

class TitleBar extends PureComponent {
  handleNotificationButtonClick = () => {
    console.info('Notifications button clicked');
  }

  handleMenuButtonClick = () => {
    console.info('Menu button clicked');
  }

  render () {
    return (
      <div className="titlebar">
        <button onClick={this.handleMenuButtonClick}>
          <MenuIcon />
        </button>
        <span>Appname</span>
        <button onClick={this.handleNotificationButtonClick}>
          <BellIcon />
        </button>
      </div>
    );
  }
}

export default TitleBar;
