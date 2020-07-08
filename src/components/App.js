import React, { Component } from 'react';
import Section from './Sections';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter'
import { uuid } from 'uuidv4';

import { Toast } from "toaster-js"
import "toaster-js/default.css";

export default class App extends Component{
  state = {
    contacts: [
      {id: uuid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: uuid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: uuid(), name: 'Eden Clements', number: '645-17-79'},
      {id: uuid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
  };
  addContact = (name, number) =>{
    
    const contact = {
      id:uuid(),
      name,
      number,
    }

    const nameIsTrue = this.state.contacts.map(conatct => conatct.name).includes(name);

    this.setState(prevState =>{
      if(nameIsTrue){
        new Toast(`${name} is already in contacts`, Toast.TYPE_ERROR, Toast.TIME_NORMAL);
      }else{
        return{
          contacts: [...prevState.contacts,contact],
        }
      }

    })
  };

  componentDidMount(){
    console.log('Contacts componentDidMount')

    const persistedTask = localStorage.getItem('contacts');

    if(persistedTask){
      this.setState({
        contacts: JSON.parse(persistedTask)
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Contacts componentDidUpdate');

    console.log('prevState: ', prevState);
    console.log('this.state: ', this.state);

    if(prevState.contacts !== this.state.contacts)
    {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  removeContact = contactId => {
    this.setState(prevState => {
      return{
        contacts: prevState.contacts.filter(({id}) => id !== contactId),
      }
    })
  }

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
  }

  render() {
    const {filter} = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (

      <Section title="Phonebook">
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter 
          value={filter} 
          onChangeFilter={this.changeFilter}
        />
        {visibleContacts.length > 0 && 
        <ContactList 
          contacts={visibleContacts} 
          onRemoveContact={this.removeContact} 
        />}
      </Section>

    )
  };
}


