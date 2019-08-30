import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SackIcon } from '../../images/sack-outline.svg';
import { ReactComponent as EntryIcon } from '../../images/format-list-bulleted.svg';
import { ReactComponent as MemberIcon } from '../../images/account-outline.svg';
import { ReactComponent as FavouriteIcon } from '../../images/heart-outline.svg';
import { ReactComponent as NotificationsIcon } from '../../images/bell-ring-outline.svg';

import './ListItem.css';

class ListItem extends PureComponent {
  render() {
    const {
      description,
      entriesCount,
      icon,
      isArchived,
      isFavourite,
      membersCount,
      name,
      notificationsCount,
      sacksCount,
      secondaryIcon,
      secondaryName,
      to
    } = this.props;

    let className = "list-item";
    if (isArchived) {
      className += " archived";
    }

    return (
      <Link to={to} className="list-item-link">
        <div className={className}>
          <div className="label">
            {icon && icon}
            <span className="name">{name}</span>
          </div>
          {secondaryName && (
            <div className="secondary-label">
              {secondaryIcon && secondaryIcon}
              <span>{secondaryName}</span>
            </div>
          )}
          {description && <div className="description">{description}</div>}
          <div className="status">
            {sacksCount !== undefined && (
              <Fragment>
                <SackIcon />
                <span>{sacksCount || 0}</span>
              </Fragment>
            )}
            {entriesCount !== undefined && (
              <Fragment>
                <EntryIcon />
                <span>{entriesCount || 0}</span>
              </Fragment>
            )}
            {membersCount !== undefined && (
              <Fragment>
                <MemberIcon />
                <span>{membersCount || 0}</span>
              </Fragment>
            )}
            {isFavourite && <FavouriteIcon />}
            {notificationsCount && (
              <div className="notifications">
                <NotificationsIcon />
                <span>{notificationsCount}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }
}

export default ListItem;
