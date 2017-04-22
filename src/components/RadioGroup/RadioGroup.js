import React, { PropTypes as toBe, Component } from 'react';
import RadioButton from '../RadioButton/RadioButton';

class RadioGroup extends Component {
  static propTypes = {
    name: toBe.string.isRequired,
    onChange: toBe.func.isRequired,
    colors: toBe.array.isRequired,
  };

  render() {
    const { onChange, name, colors } = this.props;

    return (
      <div>
        { colors.map( color => (
          <RadioButton
            key={color}
            name={name}
            color={color}
            onChange={onChange(color)}
          />)
        )}
      </div>
    )
  }
}

export default RadioGroup;
