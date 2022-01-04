import React, { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import { useNavigate } from 'react-router';



function EditContact (props)  {

      const location = useLocation()
      console.log(location.state);

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
        <div className="ui main" >
  
        <form className="ui form" onSubmit={update}>
  
        <h2>Edit Contact</h2>

        <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" 
                    value={values.email}
                    onChange={ handleChange }
                    
     
                    
                />
            </div>

            <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" 
                    value={values.name}
                    onChange={ handleChange }
                    
                />
            </div>

         
                <button className="ui button blue">Update</button>

                <Link to={'/'}>
                    <button className="ui button green">Back</button>
                </Link>
                
  
          
        </form> 

        
        </div>
    );
  
  }
  

export default EditContact;