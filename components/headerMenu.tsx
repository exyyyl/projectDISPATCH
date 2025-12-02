import "./styles/header.css"
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


export default function HeaderMenu() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <a href="/home"><img src="https://images.squarespace-cdn.com/content/v1/673ecb02839de7577f9c0982/9ab44559-e4c0-42d3-b18e-0379f4490006/ADHOC_LOGO_FULL_SMALLWhite.png?format=1500w" height="50px"/></a>
                <label className="version">A.//0.1v</label>
            </div>
            <div className="menu-right">
                <ul className="background">
                    <li><a href="/home" className="active">Main</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>   
                <div className="links-buttons">
                    <ul>
                        <li><FaDiscord/></li>
                        <li><FaInstagram/></li>
                        <li><FaBluesky/></li>
                        <li><FaXTwitter/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
