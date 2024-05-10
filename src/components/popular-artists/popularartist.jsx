import React from 'react'
import { Link } from 'react-router-dom'
import "./artist.css"
import musicDirectors from '../../assets/assets'
function Popularartist() {
  return (
    <div className="popularartist">
      <div>
        <h1 className="art-head">Popular Artists</h1>
        <div className="popartist">
          <Link to="/arrahman">
          <div>
            <img src={musicDirectors[0].artistImg} className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[0].artist}</h2>
          </div>
          </Link>
          <Link to="/illaiyaraja">
          <div>
            <img src={musicDirectors[1].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[1].artist}</h2>
          </div>
          </Link>
          <Link to="/anirudh">
          <div>
            <img src={musicDirectors[2].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[2].artist}</h2>
          </div>
          </Link>
        

        </div>
        
        <div className="popartist">
        <Link to="/u1">
          <div>
          <img src={musicDirectors[3].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[3].artist}</h2>
          </div>
          </Link>
          <Link to="/harrisjayaraj">
          <div>
            <img src={musicDirectors[4].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[4].artist}</h2>
          </div>
          </Link>
         
          <div>
            <img src={musicDirectors[5].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[5].artist}</h2>
          </div>

        </div>
       
        
        <div className="popartist">
          <div>
            <img src={musicDirectors[6].artistImg} className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[6].artist}</h2>
          </div>
          <div>
            <img src={musicDirectors[7].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[7].artist}</h2>
          </div>
          <div>
            <img src={musicDirectors[8].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[8].artist}</h2>
          </div>

        </div>
        <div className="popartist">
          <div>
            <img src={musicDirectors[9].artistImg} className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[9].artist}</h2>
          </div>
          <div>
            <img src={musicDirectors[10].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[10].artist}</h2>
          </div>
          <div>
            <img src={musicDirectors[11].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[11].artist}</h2>
          </div>

        </div>
        <div className="popartist">
          <div>
            <img src={musicDirectors[12].artistImg} className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[12].artist}</h2>
          </div>
          <div>
            <img src={musicDirectors[13].artistImg} alt="" className="artistz-img" />
            <h2 className="artist-head">{musicDirectors[13].artist}</h2>
          </div>
        

        </div>



      </div>


    </div>
  )
}

export default Popularartist;