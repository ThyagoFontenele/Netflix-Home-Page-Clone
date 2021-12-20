import React from 'react';
import './Header.css'

export default function Header({black}){

    return(
        <>
            <header className={black ? 'black' : ''}>
                <div className='header_logo'>
                    <a href=''>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="netflix logo"/>
                    </a>
                </div>
                <div className='header_user'>
                    <a href=''>
                        <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt='logo user'/>
                    </a>
                </div>
            </header>
        </>
    )
}