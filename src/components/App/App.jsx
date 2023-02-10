import { Component } from 'react';
import { Form } from 'components/Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}
