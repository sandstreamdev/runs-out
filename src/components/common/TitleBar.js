import React, { PureComponent } from 'react';

import { ReactComponent as BellIcon } from '../../images/bell-ring-outline.svg';
import { ReactComponent as MenuIcon } from '../../images/menu.svg';
import './TitleBar.css';

class TitleBar extends PureComponent {
  handleNotificationButtonClick = () => {
    console.info('Notifications button clicked');
  }

  render () {
    const { notificationsCount, onMenuClick } = this.props;

    return (
      <div className="titlebar">
        <button onClick={onMenuClick}>
          <MenuIcon />
        </button>
        <span>Appname</span>
        <button onClick={this.handleNotificationButtonClick}>
          <BellIcon />
          {notificationsCount > 0 && <span className="notifications-indicator" />}
        </button>
      </div>
    );
  }
}

export default TitleBar;
