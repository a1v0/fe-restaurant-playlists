import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { postVote } from "../app-api";
import "../VoteStars.css";

interface playlistIdProp {
    playlistId: number;
}

function VoteStars({ playlistId }: playlistIdProp) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const voteCount = useRef(0);

    // => post vote when onClick happens

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => {
                            setRating(index);
                            voteCount.current = index;
                            postVote(playlistId, voteCount.current);
                        }}
                        onMouseEnter={() => {
                            setHover(index);
                        }}
                        onMouseLeave={() => setHover(rating)}
                        onDoubleClick={() => {
                            setRating(0);
                            setHover(0);
                        }}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}

export default VoteStars;
