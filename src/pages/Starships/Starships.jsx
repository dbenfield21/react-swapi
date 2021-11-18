import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStarships } from '../../services/api-calls';


const Starships = (props) => {
  const [allStarships, setResults] = useState([])

  useEffect(()=> {
    getStarships()
    .then(allStarships => setResults(allStarships.results)) 
  }, [])
  
  return ( 
    <>
    {allStarships.length ? 
    
    <div class="grid-container">
      {allStarships.map((starship, idx) => 
      <Link id="starshipsLink" to={`/starship/${idx}`} key={idx} state={{starship}}>
        <div id="starshipDiv">{starship.name}</div>
      </Link>


    )}
    </div>
    :
    <h2>Loading your starfleet...get ready to race!</h2>
      }
    </>
  );
}

export default Starships;
