import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const isProductBookmarked = props.localItems.some(
            (item) => item.Id === props.Id
        );
        setIsBookmarked(isProductBookmarked);
    },[props.localItems,props.Id]);
    
    const saveDesign = () =>{
        if(isBookmarked){
            props.unBookmark(props.Id);
        }
        else{
            props.bookmarked(props.Id);
        }
        setIsBookmarked((prev) => !prev);
    }
    const showbtn = (i) => {
        document.getElementById("save_button" + i).style.display = "block";
    }
    const hidebtn = (i) => {
        document.getElementById("save_button" + i).style.display = "none";
    }
    return (
        <>

            <div className="mainCard" id={props.Id} onMouseEnter={() => {showbtn(props.Id)}} onMouseLeave={() => {hidebtn(props.Id)}}>
                <Link to={"/detail/" + props.Id + "/" + props.name}>
                    <img src={props.image} ></img>
                </Link>
                <div className="buttons" id={'save_button' + props.Id}>
                    <a onClick={() => saveDesign()} id="save-btn">{isBookmarked ? 'Saved' : 'Save'}</a>
                </div>
                <div className="detail">
                    <p>{props.name}</p>
                </div>
            </div>

        </>
    );
}
export default Card;