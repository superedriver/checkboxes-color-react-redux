import React, { PropTypes as toBe, Component } from 'react';
import './RadioButton.css';

class RadioButton extends Component {
  static propTypes = {
    name: toBe.string.isRequired,
    color: toBe.string.isRequired,
    onChange: toBe.func.isRequired,
  };

  render() {
    const { name, color, onChange } = this.props;

    return (
      <div className="RadioButton">
        <label>
          <input
            type="radio"
            name={name}
            onChange={onChange}
          />
            {color}
        </label>
      </div>
    )
  }
}

export default RadioButton;
