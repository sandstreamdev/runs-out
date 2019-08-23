import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from './BottomNavigation';
import NavigationLink from './NavigationLink';
import './SackView.css';
import SwipeableList from './SwipeableList';
import EntryListItem from './EntryListItem';
import NewItemLink from './NewItemLink';
import { newEntryRoute, EntriesFilters } from '../routing/entries';
import { ReactComponent as SackIcon } from '../images/sack.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import { ReactComponent as CompletedIcon } from '../images/check-outline.svg';
import { sacksRoute, sackEditRoute } from '../routing/sacks';

import { getSack } from './temp_data/sacklistview';
import { entries } from './temp_data/entries';

class SackView extends PureComponent {
  filteredEntries = filter => {
    switch (filter) {
      case EntriesFilters.ARCHIVED:
        return entries.filter(entry => entry.isArchived);
      case EntriesFilters.COMPLETED:
        return entries.filter(entry => entry.isDone);
      default:
        return entries.filter(entry => !entry.isDone);
    }
  }

  render() {
    const { match: { params: { filter, sackId } } } = this.props;
    
    const sack = getSack(sackId);
    const entriesToShow = this.filteredEntries(filter);

    return (
      <div className="sacks-view">
        <div className="header">
          <div className="title-bar">
            <Link to={sacksRoute()}>{`< Back`}</Link>
            <span>
              <SackIcon />
              <div className="title">{sack.name}</div>
            </span>
            <Link to={sackEditRoute(sackId)}>Edit</Link>
          </div>
          <div>TEST</div>
        </div>
        <SwipeableList>
          <NewItemLink label="Add Entry" to={newEntryRoute()} />
          { entriesToShow.map(entry => <EntryListItem key={entry.id} {...entry} />) }
        </SwipeableList>
        <BottomNavigation>
          <NavigationLink
            icon={<HomeIcon />}
            label="Unhandled"
            to={sacksRoute({ sackId })}
            active={filter === undefined}
          />
          <NavigationLink
            icon={<CompletedIcon />}
            label="Completed"
            to={sacksRoute({ sackId, filter: EntriesFilters.COMPLETED })}
            active={filter === EntriesFilters.COMPLETED}
          />
          <NavigationLink
            icon={<ArchiveIcon />}
            label="Archived"
            to={sacksRoute({ sackId, filter: EntriesFilters.ARCHIVED })}
            active={filter === EntriesFilters.ARCHIVED}
          />
          <NavigationLink
            icon={<MagnifyIcon />}
            label="Search"
            to="/sacks"
          />
        </BottomNavigation>
      </div>
    )
  }
}

export default SackView;
