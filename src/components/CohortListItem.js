import React, { PureComponent } from 'react';

import ListItem from './common/ListItem';
import SwipeableListItem from './common/SwipeableListItem';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { ReactComponent as LeaveCohortIcon } from '../images/exit-run.svg';
import { ReactComponent as RestoreIcon } from '../images/restore.svg';
import { ReactComponent as TrashIcon } from '../images/trash-can-outline.svg';
import { cohortsRoute } from '../routing/cohorts';
import SwipeableListItemBackground, { SwipeColor, SwipeDirection } from './SwipeableListItemBackground';

class CohortListItem extends PureComponent {
  swipeRightData = () => {
    const { isArchived } = this.props;

    if (!isArchived) {
      return;
    }

    return {
      action: () => console.info('restore cohort'),
      background: (
        <SwipeableListItemBackground
          color={SwipeColor.GREEN}
          direction={SwipeDirection.RIGHT}
          icon={<RestoreIcon />}
          label={"Restore"}
        />
      )
    }
  }

  swipeLeftData = () => {
    const { isArchived } = this.props;

    return {
      action: () => isArchived ? console.info('remove') : console.info('leave cohort'),
      background: (
        <SwipeableListItemBackground
          color={SwipeColor.RED}
          direction={SwipeDirection.LEFT}
          icon={isArchived ? <TrashIcon /> : <LeaveCohortIcon />}
          label={isArchived ? "Restore" : "Leave"}
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
        onSwipeLeft={swipeLeftData && swipeLeftData.action}
        backgroundLeft={swipeLeftData && swipeLeftData.background}
        onSwipeRight={swipeRightData && swipeRightData.action}
        backgroundRight={swipeRightData && swipeRightData.background}
      >
        <ListItem icon={<CohortIcon />} {...rest} to={cohortsRoute({ cohortId: rest.id })} />
      </SwipeableListItem>
    );
  }
}

export default CohortListItem;
