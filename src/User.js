import React from 'react';

function User(props){
    const { name, email} = props.user;
    return (
        <div className = 'person'>
            <h1>{name}</h1>
            <span>{email}</span>

        </div>
    );
}