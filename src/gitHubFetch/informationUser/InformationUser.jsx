import React from 'react';
import { Link } from 'react-router-dom';    

const UserInformation = ({user}) => {

    const { bio, followers, following, login, public_repos } = user;

    return(
        <div className='d-flex'>
            <div>{login}</div>
            {bio} <br />   
            <div className='sec-link'> 
                <Link to={`/followers/${login}`} className='link d-flex'>
                    followers {followers}
                </Link>
                <div className='link d-flex'>
                    follogin {following}
                </div>
                <Link to={`/repositories/${login}`} className='link d-flex'>
                    repos {public_repos}
                </Link>
                
            </div>        
        </div>
    )
};

export default UserInformation;