import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <p>
                Copyright &copy; 2023 YMCA Productions, trading as{" "}
                <Link to="/">Munchify</Link>.
            </p>
        </div>
    );
}

export default Footer;
