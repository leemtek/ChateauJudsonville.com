import { withFormsy } from 'formsy-react';
import React from 'react';

class CjTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div>
        <textarea type={this.props.type} name={this.props.name} className={this.props.className}
          placeholder={this.props.placeholder}
          title={this.props.title}
          onChange={this.changeValue}
          value={this.props.getValue() || ''}

          // Specific to textarea.
          rows={this.props.rows}
        ></textarea>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(CjTextArea);