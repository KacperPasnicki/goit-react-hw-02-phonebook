import React from 'react';
import { nanoid } from 'nanoid'
import { useState } from 'react';
import { ContactsList } from 'components/ContactsList/ContactsList';
import PropTypes from 'prop-types';
const INITIAL_STATE = {
  contacts: [''],
  name: '',
  number: ''
}

export class Form extends React.Component {
  static propTypes = { handleSubmit: PropTypes.func.isRequired };
    state = {
        ...INITIAL_STATE
      };
 
      elementId = nanoid(8);

      // handleSubmit = evt => {
      //   evt.preventDefault();
       
      //   const form = evt.currentTarget;
      //   const name = form.elements.name.value
      //   const number = form.elements.number.value;
      //   this.props.onSubmit({ ...this.state });
      //   console.log(name, number);
        
      //   this.setState(({ contacts }) => ({
      //     contacts: [...contacts,],
      //   }));
    
      //   form.reset();
      // };

    
  
    render() {
     
      return (
        <form onSubmit={this.props.handleSubmit}
        htmlFor={this.elementId}>
          <label>Name:
          <input 
          id={this.elementId}
          value={this.name}
          type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='text your name'
            onChange={this.handleChange}
          />
          </label>
          <label>Number: 
          <input 
          id={this.elementId}
          value={this.number}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required 
          placeholder='text your phone number' 
          
          />
          </label>
          <button type="submit">Add Contact</button>
      
          
        </form>
      );
    }
  }
  


// export const AddToBook = () => {
// const [entries, setEntries] = useState([])
// const addEntryToPhoneBook = (entry) => {
//     setEntries(
//       [...entries, entry].sort((a, b) =>
//         a.name.toLowerCase() ) ? 1 : -1
//       )
//     ;
//   }};