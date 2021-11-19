import React from "react";
import { Link } from "react-router-dom";

const Information = ({information}) => {

    const { bio, followers, following, name, login, public_repos, avatar_url } = information;

    return (
        <div>
            <img src={avatar_url} alt='img' />
            {bio} <br />
            {name} <br />
            {login} <br />
            <Link to={`/followers/${login}`}>
                followers {followers} <br />
            </Link>
            follogin {following} <br />
            repos {public_repos}
        </div>
    )
};

export default Information;