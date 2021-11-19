import React from "react";
import { Link } from "react-router-dom";
import './Followers.styles.css';

const Follower = ({follower}) => {

    const { login, avatar_url } = follower;

    return (
        <Link to={`/user/${login}`} className='cart-follower'>
            <img src={avatar_url} alt='img' className='follower-img' /> 
            {login}
        </Link>
    )
};

export default Follower;