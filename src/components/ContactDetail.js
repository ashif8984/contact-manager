/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import user from "../images/profile.png";
import {Link, useLocation} from "react-router-dom";
import { AvatarGenerator } from 'random-avatar-generator';
 


const ContactDetail =(props) => {

    //const location = useLocation();
    const location = useLocation()
    const { contact } = location.state

    
    

    // Random avatar images
    const generator = new AvatarGenerator();
    const user = generator.generateRandomAvatar();


    return (

            <div className=" ui segment">


               

                <div class="ui stackable three column grid">

                <div class="column ">

                    <div className="ui fluid card ">
                        <div class="image">
                            <img src={user} alt="user" /> 
                        </div>
                    <div class="content">
                        <a class="header">{contact.name}</a>
        
                        <div class="description">
                        {contact.email}
                        </div>
                    </div>
                
                    </div>

                    <div class="ui stackable two column grid">
                            <div class="column">
                            <Link to={"/"}>
                            <div class="ui basic fluid green button">Home</div>
                            </Link>
                            </div>
                            <div class="column">
                            <div class="ui basic fluid red button" >Delete User</div> 
                            
                            </div>
                    </div>

                </div>


                <div class="column">

                    <div class="ui secondary raised segment">
                        <a class="ui black large ribbon label"><i class="user icon"></i>  Name</a>
                        <h3>{contact.name}</h3>
                        <p></p>

                        <a class="ui blue large ribbon label"><i class="envelope icon"></i>   Email</a>
                        <h4>{contact.email}</h4>
                        <p></p>

                        <a class="ui green large ribbon label"><i class="globe icon"></i>  Country</a>
                        <h4>India</h4>
                        <p></p>

                        <a class="ui pink  large ribbon label"><i class="quote left icon"></i>  Quotes</a>
                
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    </div>


                </div>


                </div>

            </div>


         

    )
}

export default ContactDetail;