import React from "react";

const Repository = ({repository}) => {

    const { full_name } = repository;

    return (
        <section className='repository'>
            {full_name}
        </section>
    )
};

export default Repository;