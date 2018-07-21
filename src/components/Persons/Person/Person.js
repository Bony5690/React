import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  render() {
    return (
    <Aux classes={classes.Person}>
        <p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux>
  )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
