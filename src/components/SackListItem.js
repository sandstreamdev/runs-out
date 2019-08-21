import React, { PureComponent } from 'react';

import { ReactComponent as SackIcon } from '../images/sack.svg';
import { ReactComponent as ItemsIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as MembersIcon } from '../images/account-outline.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as FavouriteIcon } from '../images/heart-outline.svg';
import { ReactComponent as NotFavouriteIcon } from '../images/heart-broken-outline.svg';
import { ReactComponent as TrashIcon } from '../images/trash-can-outline.svg';
import SwipeableListItem from './SwipeableListItem';
import './SackListItem.css';

class SackListItem extends PureComponent {
  swipeRightData = () => {
    const { cohort } = this.props;

    if (cohort === undefined) {
      // move to cohort
      return;
    }

    // remove from cohort
    return {
      action: () => console.info('remove from cohort'),
      background: <span className="swipe-red"></span>
    }
  }

  swipeLeftData = () => {
    const { isFavourite, isArchived } = this.props;

    if (isArchived) {
      return {
        action: () => console.info('remove'),
        background: (
          <div className="sack-list-item-swipe left red">
            <div className="content">
              <TrashIcon />
              <span>Remove</span>
            </div>
          </div>
        )
      };
    }

    if (isFavourite) {
      return {
        action: () => console.info('remove from favourities'),
        background: (
          <div className="sack-list-item-swipe left red">
            <div className="content">
              <NotFavouriteIcon />
              <span>Remove from favourities</span>
            </div>
          </div>
        )
      }
    }

    return {
      action: () => console.info('add to favourities'),
      background: (
        <div className="sack-list-item-swipe left green">
          <div className="content">
            <FavouriteIcon />
            <span>Add to favourities</span>
          </div>
        </div>
      )
    }
  }


  render() {
    const {
      cohort,
      description,
      name,
      isArchived,
      isFavourite,
      entriesCount,
      membersCount
    } = this.props;

    let className = "sack-list-item";
    if (isArchived) {
      className += " archived";
    }

    const swipeLeftData = this.swipeLeftData();
    const swipeRightData = this.swipeRightData();

    return (
      <SwipeableListItem onSwipeLeft={swipeLeftData.action} background={swipeLeftData.background}>
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
          {description && <span className="description">{description}</span>}
          <div className="status">
            <ItemsIcon />
            <span>{entriesCount || 0}</span>
            <MembersIcon />
            <span>{membersCount || 0}</span>
            {isFavourite && <FavouriteIcon />}
          </div>
        </div>
      </SwipeableListItem>
    );
  }
}

export default SackListItem;
