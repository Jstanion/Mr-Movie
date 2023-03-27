# Mr.Movie - Movie Generator

## Description

Have you ever been stuck on what to watch? Endlessly navigating through Netflix to find anything to play as background noise. Well with this web application you'll be saying "HASTA LA VISTA!" to netflix surfing, and hello to the hours you will get back on your life! Our team has built this project with the hopes of curating a movie within minutes that you, the user, would enjoy watching based off of the info you input to the site.

## Table of Contents

 Find what you need down below!

- [Usage](#usage)
- [Features](#features)
- [Resources](#resources)
- [Acknowlegements](#acknowledgements)
- [License](#license)
- [Deployed-Version](#deployed-version)

## Usage

When navigated to the homepage of this website, Mr.Movie, you will see a top navigation bar with two drop-down elements and a search bar component. If you click on either drop-down bar you will be given a list of either: years dating from 1960-2021 or 21 different movie genres. When decided which drop-down to select from and have choosen from the list of the two, then you will be prompted with a random movie, based off the criteria selected to watch. You can only choose the elements from one drop-down at a time, but don't worry! You can always click on the home button when the movie prompt pulls up and it will refresh the homepage to try again! The same will apply for the search bar in the top right corner of the navigation area. Type in an actor or title: "ex: Tom Hanks" and then a random Tom Hanks movie will be displayed on the screen with a home button to refresh the page if need be. If you have typed in an error, or our web api does not read what is being asked for; the page will be directed to a "404 error page" and you will be able to click on the "Mr.Movie" on the top left corner of the page to go back home.

When you scroll down to the main section of the page there is a "feeling lucky" paragraph. If you are feeling the luck of the irish go ahead and click on the dancing movie condiments and be surprised by the redirect to the "Single Options Page" where a movie is genrated and provided for you by our completely random movie API generator.

When scrolled all the way down, near the footer of the website, displayed is a popcorn bucket carousel.. have yours popping yet? Listed below are the 21 movie genres from previously. However, this time if clicked upon you will be redirected to our "Multi Option Page" where there will be 3 movie images displayed to choose from based of the genre you have clicked upon. If it is taking some time to load, you will see a short gif display on the page, but don't worry we promise they are coming! Again, if not satisfied with the movie selections, Mr.Movie will be at the top left corner of the page to redirect you back to home and start all over!

Now our job is done! So, get that popcorn popping, turn the surround sound on relax!

![alt text](/images/Screenshot%202023-03-27%20at%203.15.31%20AM.png)
![alt text](/images/Screenshot%202023-03-27%20at%203.16.10%20AM.png)

## Features

## User-Interface Features

    Drop-Down Bars: 
    The drop-down bar feature enables users to quickly select options from a list of choices, improving the user experience and reducing the time required to complete tasks.

    Search Bar:
    The search bar feature enables users to quickly search an actor/actress or movie title , improving the user experience and reducing the time required to scroll.

    Hero Image Navigation:
    Provides a visually striking image displayed at top of page, as well as navigates user to a fun random movie generated page.

    Image Carousel:
    This feature increases user engagement through the popcorn visuals and help to drive conversions, making it an important part of the user interface.

## Techincal Features

    Server-Side API: 
    Allows we, as the developers, to interact with project by enabling third-party developers to integrate software into code. Making it fully functional and easier to pull large amounts of data such as the movie info, actor info, and genre info. We used two API's in the project and ran the first one to grab title and actor id's and then passed that information through a more robust API to get movie posters and other info.

    Local Storage: 
    Allowed us to store data in web browser even after closing, reopening, or refeshing pages; specifically used when loading "Multi Option Page". 

    Responsive Design:
    Allows users and developers to view webpage on different screen dimensions and it still be fully fuctional.

## Resources

- [Bulma CSS Framework](https://bulma.io/)
- [Swiffy Slider:](https://swiffyslider.com/) Provided our image carousel.
- [Basic Modal Knowledge](https://www.w3schools.com/howto/howto_css_modals.asp)
- [Stack Overflow:](https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist) Help with using nested event listeners for multiple elements with the same class.
- [W3 Schools:](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp) Using the 'keydown' trigger for an event listener.
- [Stack Overflow:](https://stackoverflow.com/questions/18067902/dynamically-add-alternate-text-for-your-image-using-the-image-url-is-it-possible) Dynamically changing the 'src and 'alt' attributes of an element.

## Acknowledgements

We would like to acknowledge the contributors of this project. You can find out more about each of us and our other work by checking out our GitHub profiles:

- [Abigail Garcia](https://github.com/abigailmgarcia)
- [Jace Latzsch](https://github.com/jacelatzsch)
- [Joey Stanion](https://github.com/Jstanion)
- [Michael Sigala](https://github.com/Msigala96)

## License

MIT: For more information, please refer to the license listed in the repository

## Deployed Version

Visit the live deployed version of the project at: <https://jstanion.github.io/amazing-project-1/>
