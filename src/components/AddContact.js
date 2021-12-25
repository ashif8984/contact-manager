import React from "react";
// import { Form } from 'semantic-ui-react'

// Class Components
class AddContact extends React.Component {


    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("All fields are required");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email:""})
        // console.log(this.state);
    }

    render () {
        return (
            <div className="ui main" >

            
                <br></br> <br></br> <br></br>
              <form className="ui form" onSubmit={this.add}>

              <h2>Add Contact</h2>
                 <div className="field">
                     <label>Name</label>
                     <input type="text" name="name" placeholder="Name" 
                         value={this.state.name}
                         onChange={(e) => this.setState({name: e.target.value})}
                     />
                 </div>
                 <div className="field">
                     <label>Email</label>
                     <input type="email" name="email" placeholder="Email" 
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                     />
                 </div>
               <button className="ui button blue">Add</button>
             </form> 
            </div>
        );
    }
}
       
 

export default AddContact;


// Functional Components


// const AddContact = () => {
//     return (
//         <div>
//             <p>Classes</p>
//         </div>
//     )
// }


// const AddContact = () => {
//     return (
//         <div>
//             <h1>Add Contact</h1>

//         {/* <Form>
//         <Form.Group widths='equal'>
//             <Form.Input fluid label='First name' placeholder='First name' />
//             <Form.Input fluid label='Last name' placeholder='Last name' />
//         </Form.Group>
//             <Form.Button>Submit</Form.Button>
//         </Form> */}


//             {/* <form className="ui form">

//                 <div className="field">
//                     <label>Name</label>
//                     <input type="text" name="name" placeholder="Name" />
//                 </div>
//                 <div className="field">
//                     <label>Email</label>
//                     <input type="email" name="email" placeholder="Email" />
//                 </div>
//                <button className="ui button blue">Add</button>
//             </form> */}
//         </div>
//     )
// };

