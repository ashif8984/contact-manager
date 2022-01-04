import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";

const contactCard =(props) => {

    const { id, name, email} = props.contact;

    console.log(props.contact);

    return (
        <div className="item">

        <img className="ui avatar image" src={user} alt="user" />
            <div className="content">

            <Link
                to={ `/contact/${id}` }
                state={{ contact: props.contact }}
                >
                <div className="header"> {name} </div>
                <div> {email} </div>
            </Link>
      
            </div>

            
            <i className="trash alternate outline icon right floated large"
                style={{ color: "red", marginTop: "4px", marginLeft: "10px"}}
                onClick={() => props.clickHandler(id)}></i>


            <Link
                to={ '/edit' }
                state={{ contact: props.contact }}>

                    
                <i className="edit alternate outline icon right floated large"
                style={{ color: "red", marginTop: "4px"}}
                ></i>
            </Link>


  
    </div>
    )
}

export default contactCard;