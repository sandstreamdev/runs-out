import React, { PureComponent } from 'react';

import ActionBar from './common/ActionBar';
import Avatar from './common/Avatar';
import SearchField from './common/SearchField';
import InputField from './common/InputField';
import MembersField from './MembersField';
import TextareaField from './common/TextareaField';
import { ReactComponent as SackIcon } from '../images/sack-outline.svg';
import { sacksRoute } from '../routing/sacks';
import './SackForm.css';

import { members } from './temp_data/members';
import { getSack } from './temp_data/sacks';

class SackForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "New Sack",
      description: ""
    };
  }

  componentDidMount() {
    const { match: { params: { sackId } } } = this.props;

    if (sackId) {
      const { name, description } = getSack(sackId);
      this.setState({
        name,
        description
      });
    }
  }

  handleNameChange = ({ target: { value: name }}) => this.setState({ name });

  handleDescriptionChange = ({ target: { value: description } }) => this.setState({ description });

  render() {
    const { match: { params: { sackId } } } = this.props;
    const { name, description } = this.state;
    const backRoute = sacksRoute({ sackId });
    
    return (
      <div className="sack-form">
        <div className="header">
          <ActionBar
            leftLabel="< Back"
            leftTo={backRoute}
            title={name}
            titleIcon={<SackIcon />}
            rightLabel="Save"
            rightTo="/"
          />
        </div>
        <div className="content">
          <Avatar
            placeholder={<SackIcon />}
            width={72}
          />
          <InputField
            label="Name"
            value={name}
            onChange={this.handleNameChange}
          />
          <TextareaField
            label="Description"
            value={description}
            onChange={this.handleDescriptionChange}
          />
          <MembersField
            label="Members"
            members={members}
          />
          <SearchField label="Cohort" />
        </div>
      </div>
    );
  }
}

export default SackForm;
