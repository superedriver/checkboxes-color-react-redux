import React, { PropTypes as toBe, Component } from 'react';
import './Square.css';

class Square extends Component {
  static propTypes = {
    color: toBe.string.isRequired,
  };

  render() {
    const { color } = this.props;
    const divColor = {
      backgroundColor: color
    };

    return (
      <div className='Square' style={divColor}>
        { color ? '' : 'Color isn\'t picked'}
      </div>
    );
  }
}

export default Square;
