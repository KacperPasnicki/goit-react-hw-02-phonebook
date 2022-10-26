import React from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
const INITIAL_STATE = {
contactsList: []

}

export class App extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = evt => {
    evt.preventDefault();
   
    const form = evt.currentTarget;
    const name = form.elements.name.value
    const number = form.elements.number.value;
    const newContact = { id: nanoid(8), name: name, number: number };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }))

    
    console.log(name, number);

     this.props.onSubmit({ ...this.state });

    form.reset();
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  



  render() {
    
  return (
      <div
      >
        <h1>Phonebook</h1>
        <Form  handleSubmit={this.handleSubmit}/>
  
        <h2>Contacts:</h2>
       <ContactsList  contacts={this.contacts}/>
       
      </div>
    );
  
}

}