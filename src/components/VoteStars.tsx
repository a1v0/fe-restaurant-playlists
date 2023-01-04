import { Link } from "react-router-dom";
import "../VoteStars.css";

function VoteStars() {
    return (
        <div className="Votes">
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
        </div>
    );
}

export default VoteStars;
