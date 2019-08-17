import React, { PureComponent } from 'react';

import { ReactComponent as SackIcon } from '../images/sack.svg';
import { ReactComponent as ItemsIcon } from '../images/format-list-bulleted.svg';
import { ReactComponent as MembersIcon } from '../images/account-outline.svg';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as FavouriteIcon } from '../images/heart-outline.svg';
import './SackListItem.css';

class SackListItem extends PureComponent {
  render() {
    const {
      cohort,
      description,
      name,
      isArchived,
      isFavourite,
      itemsCount,
      membersCount
    } = this.props;

    let className = "sack-list-item";
    if (isArchived) {
      className += " archived";
    }

    return (
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
          <span>{itemsCount || 0}</span>
          <MembersIcon />
          <span>{membersCount || 0}</span>
          {isFavourite && <FavouriteIcon />}
        </div>
      </div>
    );
  }
}

export default SackListItem;
