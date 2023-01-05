import { useEffect, useRef, useState } from "react";
import { postVote } from "../app-api";
import "../VoteStars.css";

interface VoteStarsProps {
    playlistId: number;
    totalVotes: number;
}

function VoteStars({ playlistId, totalVotes }: VoteStarsProps) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [voteCount, setVoteCount] = useState(totalVotes);
    const sendVote = useRef(0);

    function handleClick(index: number) {
        setRating(index);
        sendVote.current = index;
        postVote(playlistId, sendVote.current);
        setVoteCount(voteCount + 1);
    }

    return (
        <div className="Star-rating">
            <div className="Star-buttons">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={
                                index <= (hover || rating) ? "on" : "off"
                            }
                            onClick={()=>{
                                handleClick(index)
                            }}
                            onMouseEnter={() => {
                                setHover(index);
                            }}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <p>Total Reviews: {voteCount}</p>
        </div>
    );
}

export default VoteStars;
