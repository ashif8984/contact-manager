import React from 'react';



const Header = () => {

    const mystyle = {
        marginTop: 40, 
        height: 60, 
        background: "#516BEB",
        
        
    }
	return (
		// <div className='ui container' style={{ marginTop: 40}}>
		// 	<header>
		// 		<h2 class="ui center blue aligned header">Contact Manager</h2>
		// 	</header>


		// </div>

        <div class="ui large menu" style={ mystyle}>

<h1 class="ui center aligned icon header" style={{ marginTop: 8}}>
 

 Contact Manager

  
</h1>

 
        </div>



        
	);
};

export default Header;
