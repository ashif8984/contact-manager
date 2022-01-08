import React from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const contactCard = (props) => {
	const { id, name, email } = props.contact;

	console.log(props.contact);

	return (
        
		<div className="ui very relaxed item" style={{ marginTop: '10px',  border: "none" }}>

  

			<img className="ui mini circular image" src={user} alt="user"  />


			<div className="content" style={{ marginLeft: '10px' }}>
				<Link to={`/contact/${id}`} state={{ contact: props.contact }}>
					<div className="header"> {name} </div>
					<div> {email} </div>
				</Link>
			</div>

			<i
				className="trash icon right floated large"
				style={{ color: 'red', marginTop: '4px', marginLeft: '20px' }}
				onClick={() => props.clickHandler(id)}
			/>

			<Link to={'/edit'} state={{ contact: props.contact }}>
				<i
					className="edit icon green right floated large"
					style={{ color: 'red', marginTop: '4px' }}
				/>
			</Link>
		</div>
	);
};

export default contactCard;
