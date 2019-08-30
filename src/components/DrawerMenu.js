import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AboutIcon } from '../images/information-outline.svg';
import { ReactComponent as ActivitiesIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive-outline.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as PolicyIcon } from '../images/file-document-box-search-outline.svg';
import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { ReactComponent as SettingsIcon } from '../images/settings-outline.svg';
import Drawer from './common/Drawer';
import './DrawerMenu.css';

class DrawerMenu extends PureComponent {
  render() {
    const { open, onHide } = this.props;

    return (
      <Drawer open={open} onHide={onHide}>
        <div className="drawer-menu">
          <div className="header">
            <div className="top-part">
              <div style={{ background: 'red', flexGrow: 1 }} />
              <div style={{ background: 'green', flexGrow: 1 }} />
              <div style={{ background: 'blue', flexGrow: 1 }} />
            </div>
            <div className="bottom-part">
              <div style={{ background: 'pink', flexGrow: 1 }} />
              <div style={{ background: 'wheat', flexGrow: 1 }} />
            </div>
          </div>
          <div className="list">
            <Link className="list-item" to="/sacks" onClick={onHide}>
              <SackIcon />
              <span>Sacks ()</span>
            </Link>
            <Link className="list-item" to="/cohorts" onClick={onHide}>
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
