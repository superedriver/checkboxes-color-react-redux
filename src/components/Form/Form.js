import React, { PropTypes as toBe, Component } from 'react';
import './Form.css';
import RadioGroup from '../RadioGroup/RadioGroup';
import { COLORS } from '../../constants';

class Form extends Component {
  static propTypes = {
    onChange: toBe.func.isRequired,
  };

  render() {
    const { onChange } = this.props;
    return (
      <form className='Form'>
        <RadioGroup
          name='changeColor'
          onChange={onChange}
          colors={COLORS}
        />
      </form>
    );
  }
}

export default Form;
