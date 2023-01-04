import React from "react";
import { Link } from "react-router-dom";

export default function LogoAndUser() {
    return (
        <div className="LogoAndUser">
            <div className="logo">
                <Link to="/">
                    <img alt="Munchify logo" src="" />
                    <div className="company-name">
                        Munchify
                        {/* (if header is too cluttered, we can hide
                    this with media queries) */}
                    </div>
                </Link>
            </div>
            <div className="user-details">
                <div className="profile-pic">
                    <img alt="avatar" />
                </div>
                <div>[username]</div>
            </div>
        </div>
    );
}
