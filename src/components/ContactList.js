import React from "react";
import ContactCard from "./ContactCard"
import { Link  } from "react-router-dom";
import { useRef } from "react";






const ContactList = (props) => {
    console.log(props);

    
    const inputEl = useRef("");
    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }

    // const contacts = [{
    //     id: "1",
    //     name: "Ashif",
    //     mail:"ashif@gmail.com"
    // }]
    const renderContactList = props.contacts.map((contact) => {
        return (

            
               <ContactCard contact={contact} 
                            clickHandler={deleteContactHandler} 
                            key={contact.id}/>
        );
    });

    const getSearchTerm =() => {
            // console.log(inputEl.current.value);
            props.searchKeyword(inputEl.current.value);
    }


    return (

        <div className="main">

        <div className="ui segment">
            <div class="ui stackable three column grid">
                <div class="column">

                <h2>Contact List</h2>

                </div>
                <div class="column">
                
            
                <div className="ui fluid icon input" >
                    <input ref={inputEl} type="text" placeholder="Search Contacts..." className="prompt"
                        value={props.term}
                        onChange={getSearchTerm}
                    />
                    
                    <i className="search icon"></i>
                
            
            </div>

                </div>
                <div class="column">

                    <Link to="/add">
                        <button className="ui button right floated green">
                        
                        Add Contact</button>
                    </Link>
                </div>

            </div>
        </div>


            
      

           <div className="ui secondary segment">
            <div className="ui celled list">{renderContactList.length >0 ? renderContactList : "No Contacts Found 😕"}</div>
        
            </div>
        
        </div>

        
    )
}


export default ContactList;