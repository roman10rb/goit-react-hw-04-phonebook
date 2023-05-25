import { Component } from "react";
import Form from "./Form/Form";
import shortid from "shortid";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const LS_KEY = 'render_contact_key';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  
  };

  componentDidMount() {

    const index = localStorage.getItem(LS_KEY);
    const indexParsed = JSON.parse(index);
    if (index) {
      this.setState({
        contacts: indexParsed,
      })
    }
    
  };

  componentDidUpdate(prevProps, prevState) {

    const { contacts } = this.state;

    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts))
    }
  }

 
  


  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }

    
    const isInContact = this.state.contacts.find(name =>
      name.name === contact.name
  )

    if (isInContact) {
      alert(name + ' is already in contacts.')
      return;
    }


    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))

  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  handleDeleteContact = (index) => {
     this.setState((prevStates) => ({
                    contacts: prevStates.contacts.filter(contact => contact.id !== index)
                }))
    }
  

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleTodos = this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),)


    return <div className="container">
        <h1>Phonebook</h1>
      <Form name={this.state.name} submitContact={this.addContact} number={this.state.number} />
      <h2>Contacts</h2>
       <Filter value={this.state.filter}  onChange={this.changeFilter} />
      <ContactList todos={visibleTodos} onDeleteTodo={this.handleDeleteContact} />
    </div>

 }
 
};


export default App;