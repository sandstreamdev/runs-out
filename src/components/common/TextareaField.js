import React, { PureComponent } from 'react';

import './TextareaField.css';

class TextareaField extends PureComponent {
  render() {
    const { label, onChange, value } = this.props;

    return (
      <div className="textarea-field-component">
        {label && <span className="label">{label}</span>}
        <textarea value={value} onChange={onChange} />
      </div>
    );
  }
}

export default TextareaField;
