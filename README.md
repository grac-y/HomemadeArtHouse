# HomemadeArtHouse

HomemadeArtHouse is a React-based website created for a YouTube channel called "Homemade Art House." The website showcases various DIYs and home decor items, allowing users to explore and interact with the content.

Key Features:

Explore Page: The explore page displays a collection of DIYs and home decor items in a Masonry layout. The Masonry layout is achieved using custom CSS, creating a visually appealing and responsive grid of cards. Each item is represented as a card with an image and a "Save" button. Users can click the "Save" button to bookmark their favorite designs, and the state is managed using React's useState hook. The saved items are stored in local storage to persist across sessions.

Detail Page: Clicking on an item's card leads to a detailed page (Detail) that provides more information about the design. Users can toggle the "Save" button on this page to bookmark or unbookmark the design, updating the local storage accordingly.

Bookmark Page: The bookmark page displays a list of all the items that the user has saved. The items are fetched from local storage and rendered on this page.

About Page: The about page uses Axios to fetch data from the YouTube API about the Homemade Art House YouTube channel. This data includes the number of subscribers, view count, and video count, which is then displayed on the page to provide information about the channel's popularity and content.

Technologies Used:

ReactJS: The entire website is built using ReactJS, a popular JavaScript library for building user interfaces.

React Router: React Router is used for client-side routing, enabling navigation between different pages without refreshing the entire page.

LocalStorage: React's localStorage is utilized to save the user's bookmarked items locally, ensuring persistence across sessions.

YouTube API: The YouTube API is integrated to fetch channel statistics such as subscriber count, view count, and video count for the About page.

Responsive Design: The website is designed to be responsive, ensuring a consistent user experience across various devices and screen sizes.
