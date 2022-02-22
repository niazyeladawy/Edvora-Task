import React, { useEffect, useState } from 'react'

function SingleRide({ ride }) {
    const [date, setDate] = useState(ride.date);

    useEffect(() => {
        let d = new Date(date * 1000);
        setDate(d.toUTCString())
    }, []);

    return (
        <div className='single__ride d-flex'>
            <img src={ride.map_url} alt={ride.id} />
            <div className='ride__details ms-4'>
                <ul className='list-unstyled '>
                    <li>Ride id : <span>{ride.id}</span></li>
                    <li>Origin Station :  <span>{ride.origin_station_code}</span></li>
                    <li>station_path : <span>[{ride.station_path.toString()}]</span></li>
                    <li>Date : <span>{date && date}</span></li>
                    <li>Distance :  <span>{ride.user_distance}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default SingleRide