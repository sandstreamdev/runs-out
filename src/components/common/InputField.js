import React, { PureComponent } from 'react';

import './InputField.css'

class InputField extends PureComponent {
  render() {
    const { label, onChange, value } = this.props;

    return (
      <div className="input-field-component">
        {label && <span className="label">{label}</span>}
        <input value={value} onChange={onChange} />
      </div>
    );
  }
}

export default InputField;
