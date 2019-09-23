import React, { PureComponent } from 'react';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';

import ListItem from './common/ListItem';
import { ReactComponent as FavouriteIcon } from '../images/heart-outline.svg';
import { ReactComponent as MoveToCohortIcon } from '../images/move-to-cohort.svg';
import { ReactComponent as NotFavouriteIcon } from '../images/heart-broken-outline.svg';
import { ReactComponent as RemoveFromCohortIcon } from '../images/remove-from-cohort.svg';
import { ReactComponent as RestoreIcon } from '../images/restore.svg';
import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { ReactComponent as TrashIcon } from '../images/trash-can-outline.svg';
import SwipeableListItemBackground, { SwipeColor, SwipeDirection } from './SwipeableListItemBackground';
import { sacksRoute } from '../routing/sacks';

class SackListItem extends PureComponent {
  swipeRightData = () => {
    const { cohort, isArchived } = this.props;

    if (isArchived) {
      return {
        action: () => console.info('restore'),
        content: (
          <SwipeableListItemBackground
            color={SwipeColor.GREEN}
            direction={SwipeDirection.RIGHT}
            icon={<RestoreIcon />}
            label="Restore"
          />
        )
      };
    }

    return {
      action: () => cohort ? console.info('remove from cohort') : console.info('move to cohort'),
      content: (
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
        content: (
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
      content: (
        <SwipeableListItemBackground
          color={isFavourite ? SwipeColor.RED : SwipeColor.GREEN}
          direction={SwipeDirection.LEFT}
          icon={isFavourite ? <NotFavouriteIcon /> : <FavouriteIcon />}
          label={isFavourite ? "Remove from favourities" : "Add to favourities"}
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
        <ListItem icon={<SackIcon />} {...rest} to={sacksRoute({ sackId: rest.id })} />
      </SwipeableListItem>
    );
  }
}

export default SackListItem;
