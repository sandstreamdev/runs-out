import React, { PureComponent } from 'react';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';

import ListItem from './common/ListItem';
import { ReactComponent as DoneIcon } from '../images/check-outline.svg';
import { ReactComponent as ThumbUpIcon } from '../images/thumb-up-outline.svg';
import { ReactComponent as ThumbDownIcon } from '../images/thumb-down-outline.svg';
import SwipeableListItemBackground, { SwipeColor, SwipeDirection } from './SwipeableListItemBackground';
import { entriesRoute } from '../routing/entries';

class EntryListItem extends PureComponent {
  swipeLeftData = () => {
    const { isDone } = this.props;

    if (!isDone) {
      return {
        action: () => console.info('Set as done'),
        content: (
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
      content: (
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
      blockSwipe,
      ...rest
    } = this.props;

    const swipeLeftData = this.swipeLeftData();
    const swipeRightData = this.swipeRightData();

    return (
      <SwipeableListItem
        blockSwipe={blockSwipe}
        swipeLeft={swipeLeftData}
        swipeRight={swipeRightData}
      >
        <ListItem {...rest} to={entriesRoute({ entryId: rest.id })} />
      </SwipeableListItem>
    );
  }
}

export default EntryListItem;
