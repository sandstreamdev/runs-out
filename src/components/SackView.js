import React, { PureComponent } from 'react';

import Avatar from './common/Avatar';
import BottomNavigation from './common/BottomNavigation';
import BottomNavigationLink from './common/BottomNavigationLink';
import './SackView.css';
import SwipeableList from './common/SwipeableList';
import EntryListItem from './EntryListItem';
import NewItemLink from './common/NewItemLink';
import ActionBar from './common/ActionBar';
import { newEntryRoute, EntriesFilters } from '../routing/entries';
import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as ArchiveIcon } from '../images/archive.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import { ReactComponent as CompletedIcon } from '../images/check-outline.svg';
import { ReactComponent as ItemsIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as MembersIcon } from '../images/account-outline.svg';
import { ReactComponent as FavouriteIcon } from '../images/heart-outline.svg';
import { sacksRoute, editSackRoute } from '../routing/sacks';

import { getSack } from './temp_data/sacks';
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
    
    const {
      description,
      entriesCount,
      isFavourite,
      membersCount,
      name
    } = getSack(sackId);
    const entriesToShow = this.filteredEntries(filter);

    return (
      <div className="sack-view">
        <div className="header">
          <ActionBar
            leftLabel="< Back"
            leftTo={sacksRoute()}
            title={name}
            titleIcon={<SackIcon />}
            rightLabel="Edit"
            rightTo={editSackRoute(sackId)}
          />
          <div className="info">
            <Avatar placeholder={<SackIcon />} width={56} />
            <div className="data">
              {description && <div className="description">{description}</div>}
              <div className="status">
                <ItemsIcon />
                <span>{entriesCount || 0}</span>
                <MembersIcon />
                <span>{membersCount || 0}</span>
                {isFavourite && <FavouriteIcon />}
              </div>
            </div>
          </div>
        </div>
        <SwipeableList>
          <NewItemLink label="Add Entry" to={newEntryRoute()} />
          { entriesToShow.map(entry => <EntryListItem key={entry.id} {...entry} />) }
        </SwipeableList>
        <BottomNavigation>
          <BottomNavigationLink
            icon={<HomeIcon />}
            label="Unhandled"
            to={sacksRoute({ sackId })}
            active={filter === undefined}
          />
          <BottomNavigationLink
            icon={<CompletedIcon />}
            label="Completed"
            to={sacksRoute({ sackId, filter: EntriesFilters.COMPLETED })}
            active={filter === EntriesFilters.COMPLETED}
          />
          <BottomNavigationLink
            icon={<ArchiveIcon />}
            label="Archived"
            to={sacksRoute({ sackId, filter: EntriesFilters.ARCHIVED })}
            active={filter === EntriesFilters.ARCHIVED}
          />
          <BottomNavigationLink
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
