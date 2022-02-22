import React from 'react'
import { Link } from 'react-router-dom';
import Ride from '../Ride';

function Header() {
    return (
        <header className='bg-main py-3'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/' className='logo'>
                        Edvora
                    </Link>
                    <div className='personal__info d-flex align-items-center'>
                        <p className='text-white me-4'>{Ride.user.name}</p>
                        <img src={Ride.user.image} className="profile__image" alt=""/>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header