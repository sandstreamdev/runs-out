import React, { PureComponent } from 'react';

import ActionBar from './common/ActionBar';
import Avatar from './common/Avatar';
import InputField from './common/InputField';
import MembersField from './MembersField';
import TextareaField from './common/TextareaField';
import { ReactComponent as CohortIcon } from '../images/account-group-outline.svg';
import { cohortsRoute } from '../routing/cohorts';
import './CohortForm.css';

import { members } from './temp_data/members';
import { getCohort } from './temp_data/cohorts';

class CohortForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "New Cohort",
      description: ""
    };
  }

  componentDidMount() {
    const { match: { params: { cohortId } } } = this.props;

    if (cohortId) {
      const { name, description } = getCohort(cohortId);
      this.setState({
        name,
        description
      });
    }
  }

  handleNameChange = ({ target: { value: name }}) => this.setState({ name });

  handleDescriptionChange = ({ target: { value: description } }) => this.setState({ description });

  render() {
    const { match: { params: { cohortId } } } = this.props;
    const { name, description } = this.state;
    const backRoute = cohortsRoute({ cohortId });
    
    return (
      <div className="cohort-form">
        <div className="header">
          <ActionBar
            leftLabel="< Back"
            leftTo={backRoute}
            title={name}
            titleIcon={<CohortIcon />}
            rightLabel="Save"
            rightTo="/"
          />
        </div>
        <div className="content">
          <Avatar
            placeholder={<CohortIcon />}
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
        </div>
      </div>
    );
  }
}

export default CohortForm;
