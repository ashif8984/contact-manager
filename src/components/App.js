import React, { useState, useEffect } from "react";

import { BrowserRouter as Router,Routes , Switch, Route} from 'react-router-dom';

import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

import api from "../api/contact"

// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import EditContact from "./EditContact";
import contact from "../api/contact";


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


  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data; }

  const addContactHandler = async (contact) => {
    console.log(contact);

    const request = {
      id: uuidv4(),
      ...contact
    }
    
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };


  const updateContactHandler = async(contact) =>  {

    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log(response);
    const {id, name, email} = response.data ;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact ;
    })
    )
    }
  

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList =  contacts.filter((contact) => {
      return contact.id !==id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAAGE_KEY))
    // if(retrieveContacts) setContacts(retrieveContacts);

    const getAllContacts = async () => {
      const allcontacts = await retrieveContacts();
      if (allcontacts)setContacts(allcontacts);
    }
    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
      <div className="ui container">

      <Router  basename="/">
        <Header />
      
        {/* <Route path="/add" component={AddContact} />
        <Route path="/" component={ContactList} />  */}

        
          <Routes>


            <Route exact path="/" element={<ContactList  contacts={contacts} getContactId={removeContactHandler} />} />  
            <Route exact path="/add" element={ <AddContact addContactHandler={addContactHandler} />} /> 
            <Route exact path="/edit" element={ <EditContact updateContactHandler={updateContactHandler} />} /> 
            
            
            <Route exact path="/contact/:id" element={ <ContactDetail />} /> 

    
            
           



            
          
          </Routes>
        
 
      </Router>
 
      </div>
  );
}

export default App;
