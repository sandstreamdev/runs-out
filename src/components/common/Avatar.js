import React, { PureComponent } from 'react';

import './Avatar.css';

class Avatar extends PureComponent {
  render() {
    const { image, placeholder, width = 128 } = this.props;

    return (
      <div className="avatar-component" style={{ "--avatar-component-width": `${width}px` }}>
        {image ? <img src={image} alt="" /> : placeholder }
      </div>
    )
  }
}

export default Avatar;
