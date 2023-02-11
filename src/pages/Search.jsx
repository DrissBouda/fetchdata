import React, { useState , useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


export const Search = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchString, setSearchString] = useState('');
  
    useEffect(() => {
      // fetch the data from the JSON file
      fetch('https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/music.json')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setFilteredData(data);
        });
    }, []);
    const handleSearch = event => {
        setSearchString(event.target.value);
        setFilteredData(
          data.filter(item => {
            // check if the search string is found in any of the properties of the item
            return (
              item.name.includes(searchString)
            );
          })
        );
      };
  return (
    <div className='container'>
        <TextField  onChange={handleSearch} size='small' id="standard-basic" label="Search ..." variant="outlined" />

        <ul>
            {filteredData.map(item => (
            <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.artist}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Search;
