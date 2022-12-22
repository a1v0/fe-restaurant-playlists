import { useEffect, useState } from "react";
import american from "../images/cuisine/american.jpg"
import chinese from "../images/cuisine/chinese.jpg"
import french from "../images/cuisine/french.jpg"
import indian from "../images/cuisine/indian.jpg"
import italian from "../images/cuisine/italian.jpg"
import japanese from "../images/cuisine/japanese.jpg"
import defaultCuisine from "../images/cuisine/defaultCuisine.jpg"
import { Link } from "react-router-dom";
import { getPlaylists } from "../api";

function Playlists() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        getPlaylists().then((playlists) => {
            setPlaylists(playlists)
        });
    }, []);
    return (
        <div className="Playlists">
            <h1>Restaurant Playlists</h1>
            <ul>
                {playlists.map((playlist:{name:string, location:string, cuisine:string}) => {
                    let imgSrc
                    switch(playlist.cuisine) {
                        case "american" : 
                        imgSrc = american
                        break
                        case "chinese" : 
                        imgSrc = chinese
                        break
                        case "french" : 
                        imgSrc = french
                        break
                        case "indian" : 
                        imgSrc = indian
                        break
                        case "italian" : 
                        imgSrc = italian
                        break
                        case "japanese" : 
                        imgSrc = japanese
                        break
                        default:
                        imgSrc = defaultCuisine
                        break
                    }
                    return <li>
                        <img
                        src={imgSrc}
                        alt={`${playlist.cuisine} food`}
                    />
                    <div className="playlist-info">
                    <h2>{playlist.name}</h2>
                    <p><b>username here!!!!!!</b></p>
                    <p>{playlist.location ? `#${playlist.location}` : null} {playlist.cuisine ? `#${playlist.cuisine}` : null}</p>
                    <div className="review-data">
                        <p><b>Average Rating Here!!!</b></p>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <p><b>No. of Reviews Here!!</b></p>
                    </div>
                    </div>
                    </li>
                }) }
                <li>
                    <img
                        src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5792d411-5461-44fd-aec6-c284b82b81ad/9471e3a2-7790-48ca-896b-4161bc9bc002.jpg"
                        alt=""
                    />
                    <h2>Alvo's Eats</h2>
                    <p>Alvo234</p>
                    <p>#Chinese #Leeds</p>
                    <div className="review-data">
                        <p>4.8</p>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <Link className="star" to="">
                            ⭐
                        </Link>
                        <p>330 reviews</p>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}

export default Playlists;
