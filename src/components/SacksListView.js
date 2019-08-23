import React, { PureComponent } from 'react';

import BottomNavigation from './BottomNavigation';
import NavigationLink from './NavigationLink';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import './SacksListView.css';
import SwipeableList from './SwipeableList';
import SackListItem from './SackListItem';
import NewItemLink from './NewItemLink';

import { sacks } from './temp_data/sacklistview';

class SacksListView extends PureComponent {
  filteredSacks = filter => {
    switch (filter) {
      case 'favorities':
        return sacks.filter(sack => sack.isFavourite);
      case 'archived':
        return sacks.filter(sack => sack.isArchived);
      default:
        return sacks;
    }
  }


  render () {
    const { match: { params: { filter } } } = this.props;

    return (
      <div className="sacks-list-view">
        <div className="header">
          <span>Sacks ({sacks.length})</span>
        </div>
        <SwipeableList>
          <NewItemLink label="Add Sack" to="/sacks/new" />
          { this.filteredSacks(filter).map(sack => <SackListItem key={sack.id} {...sack} />) }
        </SwipeableList>
        <BottomNavigation>
          <NavigationLink icon={<HomeIcon />} label="All" to="/sacks" active={filter === undefined} />
          <NavigationLink icon={<HeartIcon />} label="Favorities" to="/sacks/favorities" active={filter === "favorities"} />
          <NavigationLink icon={<ArchiveIcon />} label="Archived" to="/sacks/archived" active={filter === "archived"} />
          <NavigationLink icon={<MagnifyIcon />} label="Search" to="/sacks" />
        </BottomNavigation>
      </div>
    );
  }
}

export default SacksListView;
