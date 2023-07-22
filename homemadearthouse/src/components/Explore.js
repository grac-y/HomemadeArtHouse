import React from "react";
import './explore.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
const Explore = () => {
    return (
        <>
            <section className="home home-explore">
                <div className="home-container">
                    <div className="row">
                        <div className="col col-1">
                            <h1>Bookmark Your Favourite Ideas</h1>
                        </div>
                        <div className="col col-2">
                            <h3>Save the ideas you love to revisit them at your convenience</h3>
                        </div>
                        <div className="col col-3">
                            <div className="explore_button">
                                    <Link to="../explore">Explore</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Explore;