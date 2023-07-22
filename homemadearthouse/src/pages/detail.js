import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../designs";
import '../CSS/detail.css';
import { useEffect } from "react";
const Detail = (props) => {
    const {Id} = useParams();

    let index = products.findIndex(x=>x.Id === Id)

    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const isProductBookmarked = props.localItems.some(
            (item) => item.Id === Id
        );
        setIsBookmarked(isProductBookmarked);
    },[props.localItems,Id]);
    
    const saveDesign = (Id) =>{
        if(isBookmarked){
            props.unBookmark(Id);
        }
        else{
            props.bookmarked(Id);
        }
        setIsBookmarked((prev) => !prev);
    }
    return (
        <>
            <section className="detail-section">
                <div className="main-container">
                    <div className="productDetail">
                        <div className="col col-1">
                            <img src={"/" + products[index].image} ></img>
                        </div>
                        <div className="col col-2">
                            <div className="saveBtn">
                                <div className="buttons">
                                    <a onClick={()=>saveDesign(Id)} id="save-btn">{isBookmarked ? 'Saved' : 'Save'}</a>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>{products[index].name}</h2>
                            </div>
                            <div className="para">
                                <p>{products[index].desp}</p>
                            </div>
                            <div className="mat-heading">
                                <h3>Material Required:</h3>
                            </div>
                            <div className="list">
                                <ul>
                                {products[index].material.map((m) => {
                                    return (
                                        <li>{m}</li>
                                    );
                                })}
                                </ul>
                            </div>
                            <div className="link-heading">
                                <h3>Link to video</h3>
                            </div>
                            <div className="link">
                                <a href={products[index].link} target="_blank" >{products[index].link}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Detail;