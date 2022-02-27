import React, {Component} from 'react';

class Home extends Component {
    
    state = {  };
    render() { 
        if(this.props.user){
            return(
                <h2>Hi {this.props.user.first_name}</h2>
            )
        }
        return (
            <div className='auth-wrapper'>
                <div className='auth-inner'>
                    <h2>You are not logged in</h2>
                </div>
            </div>
          );
    }

    
}

 
export default Home;