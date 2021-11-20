import React from "react";
import { Link } from "react-router-dom";
import './Information.styles.css';

const Information = ({information}) => {

    const { bio, followers, following, name, login, public_repos, avatar_url } = information;

    return (
        <div className='cart'>
            <img src={avatar_url} alt='img' 
                className='size-img'
            />
            <section className='information'>
                {bio} <br />
                {name} <br />
                {login} <br />
                <section className='sec-links'>
                    <Link to={`/followers/${login}`}>
                        <div className='link-d flex'>followers {followers} </div>
                    </Link>
                    <div className='link-d flex'>
                        follogin {following} <br />
                    </div>
                    <Link to={`/repositories/:${login}`}>
                        <div className='link-d flex'>repos {public_repos} </div>
                    </Link>     
                </section>       
            </section>
        </div>
    )
};

export default Information;