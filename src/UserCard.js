import React from 'react';

export default function UserCard({key, name, email, avatar}) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <img src={avatar} alt={name}/>
        </div>
    )
}