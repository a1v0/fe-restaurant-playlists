import { useEffect, useState } from "react";
import american from "../images/cuisine/american.jpg";
import chinese from "../images/cuisine/chinese.jpg";
import french from "../images/cuisine/french.jpg";
import indian from "../images/cuisine/indian.jpg";
import italian from "../images/cuisine/italian.jpg";
import japanese from "../images/cuisine/japanese.jpg";
import defaultCuisine from "../images/cuisine/defaultCuisine.jpg";
import { Link } from "react-router-dom";
import { getPlaylists } from "../api";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists().then((playlists) => {
      setPlaylists(playlists);
    });
  }, []);

  return (
    <div className="Playlists">
      <h1>Restaurant Playlists</h1>
      <ul>
        {playlists.map(
          (playlist: {
            playlist_id: number;
            name: string;
            location: string;
            cuisine: string;
            vote_count: string;
            total_votes: number;
            nickname: string;
          }) => {
            let imgSrc;
            switch (playlist.cuisine) {
              case "american":
                imgSrc = american;
                break;
              case "chinese":
                imgSrc = chinese;
                break;
              case "french":
                imgSrc = french;
                break;
              case "indian":
                imgSrc = indian;
                break;
              case "italian":
                imgSrc = italian;
                break;
              case "japanese":
                imgSrc = japanese;
                break;
              default:
                imgSrc = defaultCuisine;
                break;
            }
            return (
              <li key={playlist.playlist_id}>
                <img src={imgSrc} alt={`${playlist.cuisine} food`} />
                <div className="playlist-info">
                  <h2>{playlist.name}</h2>
                  <p>
                    <b>{playlist.nickname}</b>
                  </p>
                  <p>
                    {playlist.location ? `#${playlist.location}` : null}{" "}
                    {playlist.cuisine ? `#${playlist.cuisine}` : null}
                  </p>
                  <div className="review-data">
                    <p>
                      <b>{playlist.vote_count}</b>
                    </p>
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
                    <p>
                      <b>Reviews: {playlist.total_votes}</b>
                    </p>
                  </div>
                </div>
              </li>
            );
          }
        )}
        {/* {lines 100 - 127 to be deleted once happy with this page} */}
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
