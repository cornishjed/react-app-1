import React from 'react';

export default function UserCard({key, name, email, avatar}) {
    return (
        <li className='userslist__listitem'>
            <h4>{name}</h4>
            <i>{email}</i>
            <img src={avatar} alt={name}/>
        </li>
    )
}