import React, { PropTypes as toBe, Component } from 'react';
import './Form.css';
import RadioButton from '../RadioButton/RadioButton';
import { changeColor } from '../../actions'
import { connect } from 'react-redux'


class Form extends Component {
  static propTypes = {
    previousColor: toBe.string.isRequired,
    changeColor: toBe.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(color) {
    const { previousColor, changeColor } = this.props;

    return () => {
      if (previousColor !== color) {
        changeColor(color);
      }
    }
  }

  render() {
    const redColor = 'red';
    const greenColor = 'green';
    const blueColor = 'blue';
    const groupName = 'colorSquare';

    return (
      <form className='Form'>
        <RadioButton name={groupName} color={redColor} onClick={this.onClick(redColor)}/>
        <RadioButton name={groupName} color={greenColor} onClick={this.onClick(greenColor)}/>
        <RadioButton name={groupName} color={blueColor} onClick={this.onClick(blueColor)}/>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
    previousColor: state.color
  }
);

const mapDispatchToProps = {
  changeColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)

