import React from 'react'
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';
import "./main.css"
function Main() {
    return (
        <div className="main">
            <div className="top">
                <Link to="/popular">
                    <div className="sec4">

                        <h1 className="sec4-title">Popular Artists</h1>
                        <p className="sec4-para">See all</p>


                    </div>
                </Link>

                <div className="sec5">
                    <Link to="/arrahman">
                    <div>
                        <img src="./src/assets/ar-rahman.jpeg" className='artist-img' alt="" />
                        <p className='artist-para'>AR Rahman</p>
                    </div>
                    </Link>
                    <Link to="/anirudh">
                    <div>
                        <img src="./src/assets/anirudh-bg.jpg" className='artist-img' alt="" />
                        <p className='ani-para'>Anirudh</p>
                    </div>
                    </Link>
                   
                    <Link to="/u1">
                    <div className="responsive">
                        <img src="./src/assets/u1.jpg" className='artist-img' alt="" />
                        <p className='u1-para'>Yuvan Shankar Raja</p>
                    </div>
                    </Link>
                   

                    <div className="responsive">
                        <img src="./src/assets/gv.jpeg" className='artist-img' alt="" />
                        <p className='artist-para'>GV Prakash</p>
                    </div>




                </div>


            </div>

            <div className="top2">
                <div className="sec4">
                    <h1 className="sec4-title">Popular Playlist's</h1>
                    <p className="sec4-para">See all</p>
                </div>
                <div className="sec5">
                    <div>
                        <img src="./src/assets/sad-bg.jpeg" className='artist-img' alt="" />
                        <p className='sad-para'>Sad 🙁</p>
                    </div>

                    <div>
                        <img src="./src/assets/love-bg.jpeg" className='artist-img' alt="" />
                        <p className='sad-para'>Love 💕</p>
                    </div>

                    <div className="responsive">
                        <img src="./src/assets/travel-bg.jpeg" className='artist-img' alt="" />
                        <p className='sad-para'>Travel 🚀</p>
                    </div>

                    <div className="responsive">
                        <img src="./src/assets/vibez.jpg" className='artist-img' alt="" />
                        <p className='sad-para'>Vibez ⚡</p>

                    </div>




                </div>

                <Footer className="footer" />
            </div>
        </div>
    )
}

export default Main