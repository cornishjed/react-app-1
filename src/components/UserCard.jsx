import React from 'react';

import './UserCard.css';

export default function UserCard({key, name, email, avatar}) {
    return (
        <li className='usercard'>
            <h4>{name}</h4>
            <i>{email}</i>
            <img src={avatar} alt={name}/>
        </li>
    )
}