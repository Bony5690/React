import React, { PureComponent } from 'react';

import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from  '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside the constructor', props);
    //initialize state in constructor for older projects or versions of react
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount () {
      console.log( '[App.js] Inside componentWillMount()' );
    }

    componentDidMount () {
      console.log( '[App.js] Inside componentDidMount()' );
    }

    // shouldComponentUpdate ( nextProps, nextState ) {
    //   console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
    //   return true;
    // }

    componentWillUpdate ( nextProps, nextState ) {
      console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
      console.log( '[UPDATE App.js] Inside componentDidUpdate' );
    }

//initialize state this way in newer version of react outside of the constructor
  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }


  // The best of mutating the state if you run the risk of
  //interfering with other state versions
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1}
     } );
  }

  render () {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
      <Persons
       persons={this.state.persons}
       clicked={this.deletePersonHandler}
       changed={this.nameChangedHandler}/>
      );
    }

    return (

       <Aux>
        <Cockpit appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
</Aux>


    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default  withClass(App, classes.App);
