import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import products from "../designs";
const Home = () => {
    const imageArray = [
        { "image": "../img/product5.jpeg" },
        { "image": "../img/product7.jpeg" },
        { "image": "../img/product11.jpeg" },
        { "image": "../img/product12.jpeg" },
        { "image": "../img/product14.jpeg" },
        { "image": "../img/product16.png" },
        { "image": "../img/product21.jpeg" },
        { "image": "../img/product20.jpg" },
        { "image": "../img/product22.jpg" },
        { "image": "../img/bg.png" }
       
    ];
    const getRandomImagePath = () => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex].image;
      };
    return (
        <>
            <section className="home home-page">
                <div className="home-container">
                    <div className="row">
                        <div className="quotes-container">
                            <Carousel showThumbs={false} showArrows={false} autoPlay={true}
                                interval={3000} transitionTime={1000} infiniteLoop={true} swipeable={false}>
                                <div className="quote">
                                    <h1>Home Decor <span>Made Easy</span></h1>
                                </div>
                                <div className="quote">
                                    <h1>Be your own <span>Decorator</span></h1>
                                </div>
                                <div className="quote">
                                    <h1>Unleash your <span>inner DIYer</span></h1>
                                </div>
                            </Carousel>
                        </div>
                        <div className="images-container">
                            <div className="round">
                                <img src={getRandomImagePath()}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;