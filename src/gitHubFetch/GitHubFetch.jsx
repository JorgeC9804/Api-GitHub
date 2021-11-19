import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInformation from './informationUser/InformationUser';
import SearchGitHubUser from './searchGitHubUser/SearchGitHubUser';

const GitHubFetch = () => {

    const [nameUser, setNameUser] = useState('x');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState(false);
    const [start, setStart] = useState(false);
    const [user, setUser] = useState(null);

    const handleSearchUser = ({value}) => {
      setNameUser(value);
    };

    const ApiGitHub = async (event) => {     //JorgeC9804
      event.preventDefault();
      event.target.reset();
      const response = await fetch(`https://api.github.com/users/${nameUser}`);
      const result = await response.json();
      //console.log(result);
      const { login } = result;
      if(login === undefined) {
        setError(true);
      } else {
        setUser(result);
        setAvatar(result.avatar_url);
        setError(false);
        setStart(true);
      }
    };        

    return (
        <section>
            <SearchGitHubUser 
              ApiGitHub={ApiGitHub}
              handleSearchUser={handleSearchUser}
            />
            <div className='relative top-32 flex justify-center'>
              {error ? <>Not Found</> : 
                <>
                  {//linear-gradient(#07fc8a9d, #2092fcb4, white)
                    start ? 
                      <div className='principal-cart'>
                        <div className='flex justify-center'>
                          <Link to={`/user/${nameUser}`}>
                            <img src={avatar} alt='avatar' className='link-img'/>
                          </Link>    
                        </div>
                        <div className='information-found d-flex'>
                          <UserInformation user={user} />
                        </div>
                      </div>
                     : <></>
                  }         
                </>
              }
            </div>
        </section>
    )
};

export default GitHubFetch;