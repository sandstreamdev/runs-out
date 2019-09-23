import React, { PureComponent } from 'react';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';

import ActionBar from './common/ActionBar';
import Avatar from './common/Avatar';
import BottomNavigation from './common/BottomNavigation';
import BottomNavigationLink from './common/BottomNavigationLink';
import NewItemLink from './common/NewItemLink';
import SackListItem from './SackListItem';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as FavouriteIcon } from '../images/heart.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import { ReactComponent as MembersIcon } from '../images/account-outline.svg';
import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { cohortsRoute, editCohortRoute } from '../routing/cohorts';
import { SacksFilters, newSackRoute } from '../routing/sacks';
import './CohortView.css';

import { getCohort } from './temp_data/cohorts';
import { sacks } from './temp_data/sacks';

class CohortView extends PureComponent {
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
    const { match: { params: { filter, cohortId } } } = this.props;

    const {
      description,
      entriesCount,
      isFavourite,
      membersCount,
      name
    } = getCohort(cohortId);
    const sacksToShow = this.filteredSacks(filter);

    return (
      <div className="cohort-view">
        <div className="header">
          <ActionBar
            leftLabel="< Back"
            leftTo={cohortsRoute()}
            title={name}
            titleIcon={<CohortIcon />}
            rightLabel="Edit"
            rightTo={editCohortRoute(cohortId)}
          />
          <div className="info">
            <Avatar placeholder={<CohortIcon />} width={56} />
            <div className="data">
              {description && <div className="description">{description}</div>}
              <div className="status">
                <SackIcon />
                <span>{entriesCount || 0}</span>
                <MembersIcon />
                <span>{membersCount || 0}</span>
                {isFavourite && <FavouriteIcon />}
              </div>
            </div>
          </div>
        </div>
        <SwipeableList>
          <NewItemLink label="Add Sack" to={newSackRoute(cohortId)} />
          { sacksToShow.map(sack => <SackListItem key={sack.id} {...sack} />) }
        </SwipeableList>
        <BottomNavigation>
          <BottomNavigationLink
            icon={<HomeIcon />}
            label="All"
            to={cohortsRoute({ cohortId })}
            active={filter === undefined}
          />
          <BottomNavigationLink
            icon={<FavouriteIcon />}
            label="Favorites"
            to={cohortsRoute({ cohortId, filter: SacksFilters.FAVORITES })}
            active={filter === SacksFilters.FAVORITES}
          />
          <BottomNavigationLink
            icon={<ArchiveIcon />}
            label="Archived"
            to={cohortsRoute({ cohortId, filter: SacksFilters.ARCHIVED })}
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

export default CohortView;
