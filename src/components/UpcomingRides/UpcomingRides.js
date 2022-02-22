import React, { useEffect, useState } from 'react'
import Ride from '../../Ride';
import SingleRide from '../SingleRide/SingleRide';

function UpcomingRides() {
  const [rides, setRides] = useState([]);
  const [userStation, setUserStation] = useState(null)

  useEffect(() => {
    setRides(Ride.Ride);
    setUserStation(Ride.user.station_code);
  }, []);
  let distances = [];

  rides?.map((arr) => {
    let lowestDistance = arr.station_path.reduce(function (prev, curr) {
      return (Math.abs(curr - userStation) < Math.abs(prev - userStation) ? curr : prev);
    });
    distances.push(Math.abs(lowestDistance - userStation))

  })

  if (rides.length > 0) {
    for (let i = 0; i < rides.length; i++) {

      rides[i]["user_distance"] = distances[i];
    }
  }

  let sortedRides = rides.sort((a, b) => (a.user_distance > b.user_distance) ? 1 : -1)
  const currentDate = (new Date().getTime()) / 1000;

  let newSorted = sortedRides.filter((ride)=>{
    return ride.date > currentDate ? ride : null;
  })
  
  return (
    <div className='upcoming__rides'>
      <div className='container'>
        {newSorted?.map((ride) => <SingleRide key={ride.id} ride={ride} />)}
      </div>
    </div>
  )
}

export default UpcomingRides