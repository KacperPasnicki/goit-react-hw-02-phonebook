import React from 'react';
import { nanoid } from 'nanoid'
import { useState } from 'react';
export class PhoneBook extends React.Component {
   
    StartState = {
        contacts: [],
        name: '',
        number: ''
      }
 
      nameId = nanoid(8);

      handleChange = e => {
        this.setState({ name: e.target.value });
        this.setState({ number: e.target.value });
      };
    

    handleSubmit = evt => {
      evt.preventDefault();
     
      const form = evt.currentTarget;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
  
      console.log(name, number);
  
    //   this.props.onSubmit({ ...this.state });
  
      form.reset();
    };
  
    render() {
       
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='text your name'
            onChange={this.handleChange}
          />
          <input type="text" name="number"
          placeholder='text your phone number' />
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