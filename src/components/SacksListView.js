import React, { PureComponent } from 'react';

import BottomNavigation from './BottomNavigation';
import NavigationLink from './NavigationLink';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import './SacksListView.css';

class SacksListView extends PureComponent {
  render () {
    const { match: { params: { filter } } } = this.props;
    const sacks = [];

    return (
      <div className="sacks-list-view">
        <div className="header">
          <span>Sacks ({sacks.length})</span>
        </div>
        <BottomNavigation>
          <NavigationLink icon={<HomeIcon />} label="All" to="/sacks" active={filter === undefined} />
          <NavigationLink icon={<HeartIcon />} label="Favorities" to="/sacks/favorities" active={filter === "favorities"} />
          <NavigationLink icon={<ArchiveIcon />} label="Archived" to="/sacks/archived" active={filter === "archived"} />
          <NavigationLink icon={<MagnifyIcon />} label="Search" to="/sacks" active={false} />
        </BottomNavigation>
      </div>
    );
  }
}

export default SacksListView;
