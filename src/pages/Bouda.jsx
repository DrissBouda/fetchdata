import React, {useEffect, useState} from 'react'
import axios from "axios"


export const Bouda = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/music.json')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className='row'>
        {data.map(item => (
          <div className='col' key={item.artist}>
            <img alt={item.artist} src={`https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/${item.artist.toLowerCase()}.jpg`} />
            <h2>{item.artist}</h2>
            <p>{item.name} - {item.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bouda;
