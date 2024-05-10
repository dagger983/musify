import React from 'react'
import "../anirudh/ani.css"
import musicDirectors from "../../../assets/assets"
function HarrisJayaraj({ songs,onSongClick}) {
    const handleSongClick = (index) => {
        if (onSongClick) {
          onSongClick(index);
        }
      };
    return (
        <div className='artist-album'>

            <div className='artist-card'>
                <img className='artist-album-img' src={musicDirectors[4].artistImg} alt="" />
                <h1 className='artist-name'>{musicDirectors[4].artist}</h1>
            </div>

            {songs.map((song,index)=>(
            <div className='artist-songslist'>
                <hr />
                <div className='artist-songs' key={index} onClick={() => handleSongClick(index)}>

                    <h3>{song.id}</h3>
                    <h2>{song.title}</h2>
                    <h2>{song.artist}</h2>


                </div>
                <hr />
            </div>

             ))} 



        </div>
    )
}

export default HarrisJayaraj;