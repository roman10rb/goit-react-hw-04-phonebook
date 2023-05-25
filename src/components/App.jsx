import { useState, useEffect } from "react";
import Form from "./Form/Form";
import shortid from "shortid";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const LS_KEY = 'render_contact_key';
const indexParsed = JSON.parse(localStorage.getItem(LS_KEY));
 

const App = () => {

  const [contacts, setContacts] = useState(indexParsed ??
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');



  useEffect(() => {
    

      localStorage.setItem(LS_KEY, JSON.stringify(contacts))

  }, [contacts])


 const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }

    
  const isInContact = contacts.find(name =>
      name.name === contact.name
  )

    if (isInContact) {
      alert(name + ' is already in contacts.')
      return;
    }


    setContacts(
       [contact, ...contacts]
    )


  };

 const changeFilter = (e) => {
   setFilter(e.currentTarget.value)
  };

  const handleDeleteContact = (index) => {
   
    setContacts(contacts.filter(contact => contact.id !== index))
   
    }
  

    const normalizedFilter = filter.toLowerCase();

    const visibleTodos = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),)


    return <div className="container">
        <h1>Phonebook</h1>
      <Form name={name} submitContact={addContact} number={number} />
      <h2>Contacts</h2>
       <Filter value={filter}  onChange={changeFilter} />
      <ContactList todos={visibleTodos} onDeleteTodo={handleDeleteContact} />
    </div>
 
};


export default App;