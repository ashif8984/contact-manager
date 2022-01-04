import React from "react";
import user from "../images/profile.png";
import {Link, useLocation} from "react-router-dom";


const ContactDetail =(props) => {

    //const location = useLocation();
    const location = useLocation()
    const { contact } = location.state

    // const {name, email} = props.contact;


    return (

            <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                <div className="content">
                    <div className="ui aligned header">{contact.name}</div>
                    <div className="ui center">{contact.email}</div> 
                </div>
              
                </div>
            </div>
            
            <div className=" ui card centered">
                   <Link to={"/"}>
                        <button class="ui blue fluid button">Back</button>
                   </Link> 
                </div>

            </div>


         

    )
}

export default ContactDetail;