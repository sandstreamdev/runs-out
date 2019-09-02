import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AboutIcon } from '../images/information-outline.svg';
import { ReactComponent as ActivitiesIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive-outline.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as DefaultAvatarIcon } from '../images/account-outline.svg';
import { ReactComponent as LogoutIcon } from '../images/logout.svg';
import { ReactComponent as NotificationsIcon } from '../images/bell-ring-outline.svg';
import { ReactComponent as PolicyIcon } from '../images/file-document-box-search-outline.svg';
import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { ReactComponent as SettingsIcon } from '../images/settings-outline.svg';
import Drawer from './common/Drawer';
import { sacksRoute } from '../routing/sacks';
import { cohortsRoute } from '../routing/cohorts';
import './DrawerMenu.css';

class DrawerMenu extends PureComponent {
  render() {
    const { open, onHide } = this.props;

    const notificationsCount = 9;

    return (
      <Drawer open={open} onHide={onHide}>
        <div className="drawer-menu">
          <div className="header">
            <div className="top-part">
              <div className="notifications">
                <NotificationsIcon />
                <span>{notificationsCount}</span>
              </div>
              <div className="avatar">
                <DefaultAvatarIcon />
              </div>
              <div className="logout">
                <LogoutIcon />
              </div>
            </div>
            <div className="bottom-part">
              <div className="username">John Wick</div>
              <div className="email">baba.yaga@gmail.com</div>
            </div>
          </div>
          <div className="list">
            <Link className="list-item" to={sacksRoute()} onClick={onHide}>
              <SackIcon />
              <span>Sacks ()</span>
            </Link>
            <Link className="list-item" to={cohortsRoute()} onClick={onHide}>
              <CohortIcon />
              <span>Cohorts ()</span>
            </Link>
            <div className="list-item">
              <ArchiveIcon />
              <span>Archive</span>
            </div>
            <div className="list-item">
              <ActivitiesIcon />
              <span>Activities</span>
            </div>
            <div className="list-item">
              <SettingsIcon />
              <span>Settings</span>
            </div>
            <div className="list-item">
              <AboutIcon />
              <span>About</span>
            </div>
            <div className="list-item">
              <PolicyIcon />
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </Drawer>
    )
  }
}

export default DrawerMenu;
