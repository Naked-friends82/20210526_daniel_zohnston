import React from "react";
import {Link} from 'react-router-dom'
import "../css/nav.css";
import "../css_mobile/nav_mobile.css";


const Navig = () => 
<nav className="nav">
    <Link className="link" to="/about">About <span className="hide"> Daniel Zohnston</span></Link>

    <Link className="link" to="/"><span className="hide">My Lovely </span> Drawing</Link>

    <Link className="link" to="/text">Text</Link>

    <Link className="link" to="/talkAbout"><span className="hide">Let's </span> talk <span className="hide">about</span></Link>

    <Link className="link" to="/contact">Contact <span className="hide"> Daniel</span></Link>
</nav>

export default Navig;