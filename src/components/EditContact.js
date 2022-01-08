import React, { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import { useNavigate } from 'react-router';



function EditContact (props)  {

      const location = useLocation()
      //console.log(location.state);

      const { id, name, email } = location.state.contact ;
    
      const initialValues = {
        id,
        name,
        email,
        }
      const[values, setValues] = useState(initialValues) ;
      let navigate = useNavigate();

    function handleChange(e)
        {
            const { name, value } = e.target;
            setValues({ ...values,
              [name]: value,
            });
        };

    function update (e)  {
        e.preventDefault();
        if(values.name === "" || values.email === "") {
            alert("All fields are required");
            return;
        }
        
        props.updateContactHandler(values);
        setValues({email: "", name:""});
        navigate('/');
        
    }
  
  
    return (
        <div className="ui segment" >

            <div class="ui fluid cards centered" >
            <div class="card">
                    <div class="content">
            
                    <h2 class="ui center aligned icon header">
                    <i class="circular users icon"></i>
                    Edit Contacts
                    </h2>

            <form className="ui form" onSubmit={update}>
    
                <div className="fluid wide field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" 
                            value={values.name}
                            onChange={ handleChange }/>
                </div>

                <div className="fluid wide field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" 
                            value={values.email}
                            onChange={ handleChange }/>
                </div>

            

                <div>
                    <button class="fluid ui green button">Update</button>
                </div>

                <Link to={'/'}>
                <div style={{ marginTop:15}}>
                    <button class="fluid ui basic red button">Cancel</button>
                </div>
                </Link>

                    
    
            
            </form> 

                    </div>

            </div>
            </div>


        </div>
    );
  
  }
  

export default EditContact;