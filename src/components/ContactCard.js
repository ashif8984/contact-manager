import React from "react";
import user from "../images/user.png"

const contactCard =(props) => {

    const { id, name, mail} = props.contact;

    return (
        <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
            <div className="header"> {name} </div>
            <div> {mail} </div>
        </div>
        <i className="trash alternate outline icon right floated large"
            style={{ color: "red", marginTop: "4px"}}
            onClick={() => props.clickHandler(id)}
        ></i>

    </div>
    )
}

export default contactCard;