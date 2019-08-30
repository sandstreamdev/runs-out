import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { ReactComponent as ItemsIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as MembersIcon } from '../images/account-outline.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as FavouriteIcon } from '../images/heart-outline.svg';
import { ReactComponent as NotFavouriteIcon } from '../images/heart-broken-outline.svg';
import { ReactComponent as TrashIcon } from '../images/trash-can-outline.svg';
import { ReactComponent as MoveToCohortIcon } from '../images/move-to-cohort.svg';
import { ReactComponent as RemoveFromCohortIcon } from '../images/remove-from-cohort.svg';
import { ReactComponent as NotificationsIcon } from '../images/bell-ring-outline.svg';
import SwipeableListItem from './common/SwipeableListItem';
import SwipeableListItemBackground, { SwipeColor, SwipeDirection } from './SwipeableListItemBackground';
import './SackListItem.css';

class SackListItem extends PureComponent {
  swipeRightData = () => {
    const { cohort, isArchived } = this.props;

    if (isArchived) {
      return;
    }

    return {
      action: () => cohort ? console.info('remove from cohort') : console.info('move to cohort'),
      background: (
        <SwipeableListItemBackground
          color={cohort ? SwipeColor.RED : SwipeColor.GREEN}
          direction={SwipeDirection.RIGHT}
          icon={cohort ? <RemoveFromCohortIcon /> : <MoveToCohortIcon />}
          label={cohort ? "Remove from cohort" : "Move to cohort..."}
        />
      )
    }
  }

  swipeLeftData = () => {
    const { isFavourite, isArchived } = this.props;

    if (isArchived) {
      return {
        action: () => console.info('remove'),
        background: (
          <SwipeableListItemBackground
            color={SwipeColor.RED}
            direction={SwipeDirection.LEFT}
            icon={<TrashIcon />}
            label="Remove"
          />
        )
      };
    }

    return {
      action: () => isFavourite ? console.info('remove from favourities') : console.info('Add to favourities'),
      background: (
        <SwipeableListItemBackground
          color={isFavourite ? SwipeColor.RED : SwipeColor.GREEN}
          direction={SwipeDirection.LEFT}
          icon={isFavourite ? <NotFavouriteIcon/> : <FavouriteIcon />}
          label={isFavourite ? "Remove from favourities" : "Add to favourities"}
        />
      )
    }
  }

  render() {
    const {
      blockSwipe,
      cohort,
      description,
      name,
      id,
      isArchived,
      isFavourite,
      entriesCount,
      membersCount,
      notificationsCount
    } = this.props;

    let className = "sack-list-item";
    if (isArchived) {
      className += " archived";
    }

    const swipeLeftData = this.swipeLeftData();
    const swipeRightData = this.swipeRightData();

    return (
      <SwipeableListItem
        blockSwipe={blockSwipe}
        onSwipeLeft={swipeLeftData && swipeLeftData.action}
        backgroundLeft={swipeLeftData && swipeLeftData.background}
        onSwipeRight={swipeRightData && swipeRightData.action}
        backgroundRight={swipeRightData && swipeRightData.background}
      >
        <Link to={`/sacks/${id}`} className="sack-list-item-link">
          <div className={className}>
            <div className="label">
              <SackIcon />
              <span className="name">{name}</span>
            </div>
            {cohort && (
              <div className="cohort">
                <CohortIcon />
                <span>{cohort}</span>
              </div>
            )}
            {description && <div className="description">{description}</div>}
            <div className="status">
              <ItemsIcon />
              <span>{entriesCount || 0}</span>
              <MembersIcon />
              <span>{membersCount || 0}</span>
              {isFavourite && <FavouriteIcon />}
              {notificationsCount && (
                <div className="notifications">
                  <NotificationsIcon />
                  <span>{notificationsCount}</span>
                </div>)
              }
            </div>
          </div>
        </Link>
      </SwipeableListItem>
    );
  }
}

export default SackListItem;
