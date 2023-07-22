import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import '../CSS/about.css';
const About = () => {
    const [channelStats, setChannelStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCQPd8gpbFIELdNHIAAWfb4w&key=Channel_API_Key`
                );
                setChannelStats(response.data.items[0].statistics);
            } catch (error) {
                console.error('Error fetching channel statistics:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <h2>About Homemade Art House</h2>
                    <p>
                        Welcome to Homemade Art House, a YouTube channel dedicated to showcasing DIY arts and crafts projects. We believe in the power of creativity and the joy of making things by hand. Whether you're an experienced artist or just starting your creative journey, our channel provides inspiration, tutorials, and tips to help you explore your artistic side.
                    </p>
                    <a href="https://www.youtube.com/channel/UCQPd8gpbFIELdNHIAAWfb4w" target="_blank" rel="noopener noreferrer" className="channel-button">Visit Our YouTube Channel</a>
                </div>
            </section>

            <section className="analytics-section">
                <div className="container">
                    <h2>YouTube Channel Analytics</h2>
                    {channelStats ? (
                        <div className="analytics-data">
                            <p>Subscriber Count: {channelStats.subscriberCount}</p>
                            <p>View Count: {channelStats.viewCount}</p>
                            <p>Video Count: {channelStats.videoCount}</p>
                        </div>
                    ) : (
                        <p>Loading channel statistics...</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default About;