import React from "react";
import Explore from "./explore";
import '../CSS/bookmark.css';
const Bookmark = (props) => {
    return (
        <>
        <h2 className="bookmark-heading">Saved</h2>
            <Explore product = {props.item} bookmarked={props.bookmarked} unBookmark={props.unBookmark} localItems = {props.localItems}/>
        </>
    );
}
export default Bookmark;