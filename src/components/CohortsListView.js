import React, { PureComponent } from 'react';
import SwipeableList from './SwipeableList';
import SwipeableListItem from './SwipeableListItem';
import ListItem from './ListItem';

import BottomNavigation from './BottomNavigation';
import NavigationLink from './NavigationLink';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import NewItemLink from './NewItemLink';
import { newCohortRoute, cohortsRoute, CohortsFilters } from '../routing/cohorts';
import './CohortsListView.css';
import { cohorts } from './temp_data/cohorts';

class CohortsListView extends PureComponent {
  filteredCohorts = filter => {
    switch (filter) {
      case CohortsFilters.ARCHIVED:
        return cohorts.filter(cohort => cohort.isArchived);
      default:
        return cohorts;
    }
  }

  render() {
    const { match: { params: { filter } } } = this.props;
    const cohortsToShow = this.filteredCohorts(filter);

    return (
      <div className="cohorts-list-view">
        <div className="header">
          <span>Cohorts ({cohortsToShow.length})</span>
        </div>
        <SwipeableList>
          <NewItemLink label="Add cohort" to={newCohortRoute()} />
          { cohortsToShow.map(cohort => (
            <SwipeableListItem key={cohort.id}>
              <ListItem icon={<CohortIcon />} {...cohort} to={cohortsRoute({ filter, cohortId: cohort.id })} />
            </SwipeableListItem>
          )) }
        </SwipeableList>
        <BottomNavigation>
          <NavigationLink
            icon={<HomeIcon />}
            label="All"
            to={cohortsRoute()}
            active={filter === undefined}
          />
          <NavigationLink
            icon={<ArchiveIcon />}
            label="Archived"
            to={cohortsRoute({ filter: CohortsFilters.ARCHIVED })}
            active={filter === CohortsFilters.ARCHIVED}
          />
          <NavigationLink
            icon={<MagnifyIcon />}
            label="Search"
            to={cohortsRoute()}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default CohortsListView;