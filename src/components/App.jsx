import React, {Component} from 'react';

import Forma from './Form/Form'
import Contacts from './Contacts/Contacts'

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render () {
  return (
    <div>
  <Forma/>

  <Contacts/>
  </div> 
  )
  }
}

export default App
