import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"

const Music = () => {
  const [musics, setMusics] = useState([])
  useEffect(()=> {
    const fetchAllMusic = async () => {
        try{
            const res = await axios.get("http://localhost:8800/music")
            setMusics(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchAllMusic()
  })
  return (
    <div className='container text-center'>
      <div className='row'>
        {musics.map(music=>(
          <div className='col'>
            <div className="card">
              <img src={`https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/${music.artiste.toLowerCase()}.jpg`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{music.artiste}</h5>
                <p className="card-text">{music.titre}.mp3</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Music;
