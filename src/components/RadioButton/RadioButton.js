import React, { PropTypes as toBe, Component } from 'react';
import './RadioButton.css';

class RadioButton extends Component {
  static propTypes = {
    name: toBe.string.isRequired,
    color: toBe.string.isRequired,
    onClick: toBe.func.isRequired,
  };

  render() {
    const { name, color, onClick } = this.props;

    return (
      <div className="RadioButton">
        <label>
          <input
            type="radio"
            name={name}
            onClick={onClick}
          />
            {color}
        </label>
      </div>
    )
  }
}

export default RadioButton;
