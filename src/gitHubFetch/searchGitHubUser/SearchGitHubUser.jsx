import React from "react";

const SearchGitHubUser = ({ApiGitHub, handleSearchUser}) => {

    return(
        <form onSubmit={ event =>  ApiGitHub(event)} className='flex justify-center relative top-14'>
            <input 
                type='text' 
                placeholder='Search user' 
                className='input-search w-search rounded-l-3xl bg-transparent'
                onChange={({target}) => handleSearchUser(target)} 
            />
            <input 
                type='submit' 
                value='search' 
                className='input-submit rounded-r-3xl bg-transparent'
            />
        </form>
    )
};

export default SearchGitHubUser;