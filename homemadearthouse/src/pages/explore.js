import React, { useState } from "react";
import { useEffect } from "react";
import "../CSS/explorePage.css";
import Card from "../components/Card";

const Explore = (props) => {
    return (
        <>
            <section className="expContainer">
                <div className="main-container">
                    <div className="cardContainer">
                        <div className="masonryContainer">
                            {props.product.map((p) => {
                                return (<Card Id={p.Id} image={p.image} name={p.name} bookmarked={props.bookmarked} unBookmark={props.unBookmark} localItems = {props.localItems}/>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Explore