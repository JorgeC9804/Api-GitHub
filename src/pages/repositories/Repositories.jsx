import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Repository from "./Repository";
import './Repositories.styles.css'

const Repositories = () => {
    
    const { userName } = useParams();
    //console.log(login)
    const [repositoriee, setRepositories] = useState([]);
    const [name, setName] = useState('');
    const [repos, setRepos] = useState(0)

    useEffect( () => {
        const userFetch = async () => {
            const result = await fetch(`https://api.github.com/users/${userName}`);
            const response = await result.json();
            const resultRepositories = await fetch(response.repos_url);
            const responseReositories = await resultRepositories.json();
            setRepositories(responseReositories);
            setName(response.login);
            setRepos(response.public_repos);
        }
        userFetch();
    }, [userName] )

    return (
        <div>
            <h1 className='title'>
                {name}'s Repositories {repos}
            </h1>
            <div className='repositories'>
                {
                    repositoriee && repositoriee.length > 0 &&
                    repositoriee.map( repository => <Repository repository={repository} key={repository.id}/> )
                }
            </div>
        </div>
    )
};


export default Repositories;