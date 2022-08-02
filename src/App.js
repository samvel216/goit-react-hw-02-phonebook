import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Phonebook from './components/phonebook/phonebook';
import Contacts from './components/contacts/contacts';
import Filter from './components/Filter/filter';
import styles from './components/contacts/Contacts.module.css';

export class App extends Component {
  state = {
    contacts: [{name: 'Rosie Simpson',
    number: ' 645-17-26',
    id: nanoid()},
    {name: 'Hermione Kline',
    number: ' 443-89-12',
    id: nanoid()},
    {name: 'Elden Clements',
    number: ' 459-12-56',
    id: nanoid()}],
    name: '',
    number: '',
    fillter: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let i = 0;
    const form = event.currentTarget;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    const massive = this.state.contacts;
    massive.map(element => {
      if (element.name === nameValue) {
        alert(`${nameValue} is already in contacts`);
        i = 1;
      }
    })
    if (i === 0){
      const formDispatch = {name: nameValue, number: numberValue, id: nanoid()};

      this.setState(prevState => ({
        contacts: [formDispatch, ...prevState.contacts]
      }));
    }
  }
  inputUpdate = (event) => {
    event.preventDefault();
    this.setState({
      fillter: event.currentTarget.value
    });
  }
  contactsFilter = () => {
  return this.state.contacts.filter(element => element.name.toLowerCase().includes(this.state.fillter.toLowerCase()));
  }
  deleteButton = (event) => {
    event.preventDefault();
    let index;
    const massive = this.state.contacts;
    massive.map(element => {
      if (element.id === event.currentTarget.id) {
        index = this.state.contacts.indexOf(element)
      }
    })
    massive.splice(index, 1);
    this.setState({
      contacts: [...massive]
    })
  }
  render() { 
    const filteredEl = this.contactsFilter();
    return (
    <div>
    <h3 className={styles.title}>Phonebook</h3>
    <Phonebook handleSubmit = {this.handleSubmit}/>
    <h3 className={styles.title}>Contacts</h3>
    <Filter inputUpdate = {this.inputUpdate}/>
    <Contacts massive = {filteredEl} deleteButton = {this.deleteButton}/>
    </div>  
    )
  }
}
