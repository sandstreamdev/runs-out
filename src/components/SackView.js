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
import { ReactComponent as ItemsIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as MembersIcon } from '../images/account-outline.svg';
import { ReactComponent as FavouriteIcon } from '../images/heart-outline.svg';
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
    
    const {
      description,
      entriesCount,
      isFavourite,
      membersCount,
      name
    } = getSack(sackId);
    const entriesToShow = this.filteredEntries(filter);

    return (
      <div className="sacks-view">
        <div className="header">
          <div className="title-bar">
            <Link to={sacksRoute()}>{`< Back`}</Link>
            <span>
              <SackIcon />
              <div className="title">{name}</div>
            </span>
            <Link to={sackEditRoute(sackId)}>Edit</Link>
          </div>
          <div className="info">
            <div className="image">
              <SackIcon />
            </div>
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