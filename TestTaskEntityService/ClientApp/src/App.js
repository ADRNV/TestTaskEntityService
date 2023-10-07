import React, { Component } from 'react';
import PropertyForm from './components/PropertyForm/PropertyForm';

export default class App extends Component {
  static displayName = App.name;

  render() {
      return (
          <PropertyForm></PropertyForm>
       );
  }
}
