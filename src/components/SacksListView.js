import React, { PureComponent } from 'react';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';

import BottomNavigation from './common/BottomNavigation';
import BottomNavigationLink from './common/BottomNavigationLink';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import './SacksListView.css';
import SackListItem from './SackListItem';
import NewItemLink from './common/NewItemLink';
import { newSackRoute, sacksRoute, SacksFilters } from '../routing/sacks';

import { sacks } from './temp_data/sacks';

class SacksListView extends PureComponent {
  filteredSacks = filter => {
    switch (filter) {
      case SacksFilters.ARCHIVED:
        return sacks.filter(sack => sack.isArchived);
      case SacksFilters.FAVORITES:
        return sacks.filter(sack => sack.isFavourite);
      default:
        return sacks;
    }
  }

  render() {
    const { match: { params: { filter } } } = this.props;
    const sacksToShow = this.filteredSacks(filter);

    return (
      <div className="sacks-list-view">
        <div className="header">
          <span>Sacks ({sacksToShow.length})</span>
        </div>
        <SwipeableList>
          <NewItemLink label="Add Sack" to={newSackRoute()} />
          { sacksToShow.map(sack => <SackListItem key={sack.id} {...sack} />) }
        </SwipeableList>
        <BottomNavigation>
          <BottomNavigationLink
            icon={<HomeIcon />}
            label="All"
            to={sacksRoute()}
            active={filter === undefined}
          />
          <BottomNavigationLink
            icon={<HeartIcon />}
            label="Favorites"
            to={sacksRoute({ filter: SacksFilters.FAVORITES })}
            active={filter === SacksFilters.FAVORITES}
          />
          <BottomNavigationLink
            icon={<ArchiveIcon />}
            label="Archived"
            to={sacksRoute({ filter: SacksFilters.ARCHIVED })}
            active={filter === SacksFilters.ARCHIVED}
          />
          <BottomNavigationLink
            icon={<MagnifyIcon />}
            label="Search"
            to="/sacks"
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default SacksListView;
