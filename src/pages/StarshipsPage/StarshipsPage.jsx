import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'


const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState([])

  let location = useLocation()

  useEffect(()=> { 
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  },[])

  return (  
    <>

    {starshipDetails.length ? 
      <div class="container">
        <h1>{starshipDetails.name}</h1>
        <h1>{starshipDetails.model}</h1>
        <p><a href="/">Return to the Fleet</a></p>
      </div>
    :  
    <h2>Loading your racecare er...ship...</h2>
    }
    </>
  );
}

export default StarshipDetails;