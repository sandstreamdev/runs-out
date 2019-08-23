import React, { PureComponent } from 'react';

class EntryListItem extends PureComponent {
  render() {
    const { name } = this.props;
    return <div>{ name }</div>;
  }
}

export default EntryListItem;
