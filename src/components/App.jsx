import React from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { Filter } from './Filter';

  const INITIAL_STATE = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

export class App extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = evt => {
    evt.preventDefault();
   
    const form = evt.currentTarget;
    const name = form.elements.name.value
    const number = form.elements.number.value;
    const newContact = { id: nanoid(8), name: name, number: number };
    const nameArray = this.state.contacts.map(({name}) =>name)
    if (nameArray.includes(name)) {
      alert(`${name} is already in contacts !`)
    }else {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }))

    
    console.log(name, number);

    //  this.props.onSubmit({ ...this.state });

    form.reset();
  }};
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  fooFilter = () => {
    const newArray = this.state.contacts.filter(contact => {
      const valueToLow = this.state.filter.toLowerCase();
      return contact.name.toLowerCase().includes(valueToLow);
    });
    return newArray;
  };

  fooDelete = contactID => {
    const index = this.state.contacts.findIndex(
      contact => contact.id === contactID
    );
    const genNewElement = () => {
      const array = this.state.contacts;
      let newArray = [];
      for (const element of array) {
        if (array.indexOf(element) !== index) {
          newArray.push(element);
        }
      }
      return newArray;
    };
    this.setState(({ contacts }) => ({ contacts: genNewElement() }));
  };

  render() {
    
  return (
      <div
      >
        <h1>Phonebook</h1>
        <Form  handleSubmit={this.handleSubmit}/>
  
        <h2>Contacts:</h2>
      <Filter value={this.state.filter} handleChange={this.handleChange}/>
      <ContactsList
      onDelete={this.fooDelete} filterArray={this.fooFilter}
      />
      </div>
    );
  
}

}