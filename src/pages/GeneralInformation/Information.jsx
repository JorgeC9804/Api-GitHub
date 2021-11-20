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
                <Link to={`/followers/${login}`}>
                    followers {followers} <br />
                </Link>
                follogin {following} <br />
                repos {public_repos}
            </section>
        </div>
    )
};

export default Information;