import React, { PropTypes as toBe, Component } from 'react';
import './Circle.css';

class Circle extends Component {
  static propTypes = {
    color: toBe.string.isRequired,
  };

  render() {
    const { color } = this.props;
    const divColor = {
      backgroundColor: color
    };

    return (
      <div className='Circle' style={divColor}>
        { color ? '' : 'Color isn\'t picked'}
      </div>
    );
  }
}

export default Circle;
