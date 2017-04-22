import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Square from '../Square/Square';
import Circle from '../Circle/Circle';
import { changeSquareColor, changeCircleColor } from '../../actions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);

    this.onSquareFormChange = this.onFormChange.bind(this, 'squareColor');
    this.onCircleFormChange = this.onFormChange.bind(this, 'circleColor');
  }

  getPreviousColor(field) {
    return this.props[field];
  }

  onFormChange(field, color) {
    return () => {
      const previousColor = this.getPreviousColor(field);

      if (previousColor !== color) {
        const actions = {
          'squareColor': this.props.changeSquareColor,
          'circleColor': this.props.changeCircleColor,
        };

        actions[field](color);
      }
    }
  }

  render() {
    const { squareColor, circleColor } = this.props;
    return (
      <div className="App">
        <div>
          <Form
            onChange={this.onSquareFormChange}
          />
          <Square color={squareColor}/>
        </div>
        <div>
          <Form
            onChange={this.onCircleFormChange}
          />
          <Circle color={circleColor} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ squareColor, circleColor }) => ({
  squareColor,
  circleColor,
});

const mapDispatchToProps = {
  changeSquareColor,
  changeCircleColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
