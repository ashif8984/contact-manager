import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router';

function AddContact(props) {
	console.log(props.contact);
	const initialValues = {
		name: '',
		email: ''
	};

	const [ values, setValues ] = useState(initialValues);

	let navigate = useNavigate();

	function handleChange(e) {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	}

	function add(e) {
		e.preventDefault();
		if (values.name === '' || values.email === '') {
			alert('All fields are required');
			return;
		}

		console.log(values.email);

		props.addContactHandler(values);
		setValues({ pEmail: '', pName: '' });

		navigate('/');
	}

	return (
		<div className="ui secondary segment">

			<div class="ui fluid secondary cards centered">
			<div class="card">
    			<div class="content">
    

				<h2 class="ui center aligned icon header">
				<i class="circular users icon"></i>
				Add Contacts
				</h2>

				<form className="ui form" onSubmit={add}>


							<div className="fluid wide field">
								<label>Name</label>
								<input type="text" name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} />
							</div>


							<div className="fluid wide field">
								<label>Email</label>
								<input type="email" name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} />
							</div>

						
							<div>
							<button class="fluid ui green button">Add</button>
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

export default AddContact;
