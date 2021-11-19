import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Information from "./Information";

const GeneralInformation = () => {

    const { userName } = useParams();
    const [information, setInformation] = useState({});


    useEffect( () => {
        const FetchInformation = async () => {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const result = await response.json();
            setInformation(result);
            console.log(result)
        }
        FetchInformation();
    }, [userName])

    return (
        <div>
            <Information information={information}/>
        </div>
    )
};

export default GeneralInformation;