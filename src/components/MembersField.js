import React, { PureComponent } from 'react';

import Avatar from './common/Avatar';
import { ReactComponent as AddRemoveMember } from '../images/add-remove-member.svg';
import { ReactComponent as DefaultAvatarIcon } from '../images/account-outline.svg';
import './MembersField.css';

class MembersField extends PureComponent {
  render() {
    const { label, members } = this.props;

    return (
      <div className="members-field-component">
        <span className="label">{label}</span>
        <div className="content">
          <div className="avatars">
            {members.map(member => (
              <Avatar
                key={member.id}
                width={44}
                placeholder={<DefaultAvatarIcon />}
              />
            ))}
          </div>
          <button>
            <AddRemoveMember />
            Change...
          </button>
        </div>
      </div>
    );
  }
}

export default MembersField;
