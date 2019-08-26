import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CommentsIcon } from '../images/comment-outline.svg';
import { ReactComponent as DoneIcon } from '../images/check-outline.svg';
import { ReactComponent as ThumbUpIcon } from '../images/thumb-up-outline.svg';
import { ReactComponent as ThumbDownIcon } from '../images/thumb-down-outline.svg';
import { ReactComponent as NotificationsIcon } from '../images/bell-ring-outline.svg';
import SwipeableListItem from './SwipeableListItem';
import './EntryListItem.css';
import SwipeableListItemBackground, { SwipeColor, SwipeDirection } from './SwipeableListItemBackground';

class EntryListItem extends PureComponent {
  swipeLeftData = () => {
    const { isDone } = this.props;

    if (!isDone) {
      return {
        action: () => console.info('Set as done'),
        background: (
          <SwipeableListItemBackground
            color={SwipeColor.GREEN}
            direction={SwipeDirection.LEFT}
            icon={<DoneIcon />}
            label="Done"
          />
        )
      }
    }
  }

  swipeRightData = () => {
    const { isVoted } = this.props;

    return {
      action: () => isVoted ? console.info('downvote') : console.info('upvote'),
      background: (
        <SwipeableListItemBackground
          color={isVoted ? SwipeColor.RED : SwipeColor.GREEN}
          direction={SwipeDirection.RIGHT}
          icon={isVoted ? <ThumbDownIcon /> : <ThumbUpIcon />}
          label={isVoted ? "Remove vote" : "Upvote"}
        />
      )
    }
  }

  render() {
    const {
      commentsCount,
      description,
      favsCount,
      id,
      name,
      notificationsCount
    } = this.props;

    const swipeLeftData = this.swipeLeftData();
    const swipeRightData = this.swipeRightData();

    return (
      <SwipeableListItem
        onSwipeLeft={swipeLeftData && swipeLeftData.action}
        backgroundLeft={swipeLeftData && swipeLeftData.background}
        onSwipeRight={swipeRightData && swipeRightData.action}
        backgroundRight={swipeRightData && swipeRightData.background}
      >
        <Link to={`/entries/${id}`} className="entry-list-item-link">
          <div className="entry-list-item">
            <span className="name">{ name }</span>
            {description && <div className="description">{description}</div>}
            <div className="status">
              <CommentsIcon />
              <span>{commentsCount || 0}</span>
              <ThumbUpIcon />
              <span>{favsCount || 0}</span>
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

export default EntryListItem;
