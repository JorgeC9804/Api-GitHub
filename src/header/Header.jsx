import React , { useContext } from "react";
import { Link } from "react-router-dom";
import GitHubContext from "../gitHubContext/GitHubContext";

const Header = () => {

    const { handleColorTheme, color} = useContext(GitHubContext);
    //console.log(color);

    return (
        <div className={color ? 'h-20 flex items-center text bg-black text-white' : 
                                'h-20 flex items-center text bg-by1 text-black'}>
            <Link to='/'>
                GITHUB user
            </Link>   
            <button 
                className='btn'
                onClick={handleColorTheme}
            >Color Theme</button>
         </div>
    )
};

export default Header;