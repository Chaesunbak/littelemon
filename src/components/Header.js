import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'

const Hero = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to='/booking'><button aria-label='reserve table button'>Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt="banner image"/>
                </div>
            </section>
        </header>
    )
}

export default Hero;