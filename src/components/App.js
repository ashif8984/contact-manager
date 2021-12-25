import React, { useState, useEffect } from "react";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList";
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // const contacts =[
  //   {"id": 1,
  //   "name": "Ashif",
  //   "mail": "ashif@gmail.com"
  // },
  // {
  //     "id": 2,
  //     "name": "Sachin",
  //     "mail": "sachin@gmail.com"
  // }
  //   ]
    
  const [contacts, setContacts ] = useState([]);
  const LOCAL_STORAAGE_KEY = "contacts";


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList =  contacts.filter((contact) => {
      return contact.id !==id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAAGE_KEY))
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>     
      </div>
     
  
  );
}

export default App;
