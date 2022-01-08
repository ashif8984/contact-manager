import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    const mystyle = {
        marginTop: 40, 
        height: 60, 
        // background: "#FFC900",
    }
	return (

        <div class="ui large menu" style={ mystyle}>    
            <h1 class="ui center aligned icon header" style={{ marginTop: 8}}> 
            <Link to={'/'}>
            Contact Manager  </Link>
            </h1>
           

        </div>

	);
};

export default Header;
