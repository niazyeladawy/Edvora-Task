import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className='container py-3'>
                <div>
                    <NavLink to="nearestrides" className={(navData) => navData.isActive ? "activeNav " : "" }>
                        Nearest rides
                    </NavLink>
                    <NavLink to="upcomingrides"  className={(navData) => navData.isActive ? "activeNav " : "" }>
                        Upcoming rides
                    </NavLink>
                    <NavLink to="pastrides"  className={(navData) => navData.isActive ? "activeNav " : "" }>
                        Past rides
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar