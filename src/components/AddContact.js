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
		<div className="ui main">
			<form className="ui form" onSubmit={add}>
				<h2>Add Contact</h2>

				<div className="field">
					<label>Email</label>
					<input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
				</div>

				<div className="field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
				</div>

				<button className="ui button blue">Add</button>

				<Link to={'/'}>
					<button className="ui button green">Back</button>
				</Link>
			</form>
		</div>
	);
}

export default AddContact;
