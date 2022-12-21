import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlaylists } from "../api";


function Playlists() {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        getPlaylists().then((playlists) => {
            console.log(playlists)
        })
    }, [])
    return (
      <div className="Playlists">
        <h1>Restaurant Playlists</h1>
        <ul>
            <li>
                <img src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5792d411-5461-44fd-aec6-c284b82b81ad/9471e3a2-7790-48ca-896b-4161bc9bc002.jpg" alt=""/>
                <h2>Alvo's Eats</h2>
                <p>Alvo234</p>
                <p>#Chinese #Leeds</p>
                <div className="review-data">
                <p>4.8</p>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <p>330 reviews</p>
                </div>
            </li>
            <li>
                <img src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5792d411-5461-44fd-aec6-c284b82b81ad/9471e3a2-7790-48ca-896b-4161bc9bc002.jpg" alt=""/>
                <h2>Alvo's Eats</h2>
                <p>Alvo234</p>
                <p>#Chinese #Leeds</p>
                <div className="review-data">
                <p>4.8</p>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <p>330 reviews</p>
                </div>
            </li>
            <li>
                <img src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5792d411-5461-44fd-aec6-c284b82b81ad/9471e3a2-7790-48ca-896b-4161bc9bc002.jpg" alt=""/>
                <h2>Alvo's Eats</h2>
                <p>Alvo234</p>
                <p>#Chinese #Leeds</p>
                <div className="review-data">
                <p>4.8</p>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <p>330 reviews</p>
                </div>
            </li>
            <li>
                <img src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5792d411-5461-44fd-aec6-c284b82b81ad/9471e3a2-7790-48ca-896b-4161bc9bc002.jpg" alt=""/>
                <h2>Alvo's Eats</h2>
                <p>Alvo234</p>
                <p>#Chinese #Leeds</p>
                <div className="review-data">
                <p>4.8</p>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <Link to="/">⭐</Link>
                <p>330 reviews</p>
                </div>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Playlists;