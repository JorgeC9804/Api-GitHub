import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Follower from "./Follower";
import './Followers.styles.css';

const Followers = () => {

    const { login } = useParams();
    //console.log(login)
    const [followers, setFollowers] = useState([]);
    const[follow, setFollow] = useState(0)

    useEffect( () => {
        const userFetch = async () => {
            const result = await fetch(`https://api.github.com/users/${login}`);
            const response = await result.json();
            const resultFollowers = await fetch(response.followers_url);
            const responseFollowers = await resultFollowers.json();
            setFollowers(responseFollowers);
            setFollow(response.followers)
        }
        userFetch();
    }, [login] )

    return (
        <div className='title'>
            <h1>
                {login}'s Followers {follow} 
            </h1>
            <div className='followers'>
            {
                followers && followers.length > 0 &&
                followers.map( follower => <Follower follower={follower} key={follower.id}/> )
            }
            </div>
        </div>
    )
};

export default Followers;