This project was created so that I could learn more about using APIs in my projects as well as observables in Angular. 

Some of the utilities are simple, others took more work to make a simple thing happen.

My Local DB -

    This is an API that I built using node.js, express, and mongoDB. It has two tables, one for users and one for products. 
        A user has to 'create an account' by submitting a unique email with a password. Then, they must log in to get a unique
        token before being able to view the products table. 

        The server is local, so it must be set up locally before it will work on your machine.

Google Maps -

    Just simply bringing in google maps. Whenever I thought of an example API that I wanted to try, this was the first thing
        that came to mind.

Nasa APIs -

    - APOD
        Astronomical Picture of the Day. This was a fun and simple API to use. Pulls up the HD image from nasa if one is available.
            Alternatively if there is a video rather than a picture, it embeds the video. 
            In either case, it will also show the title of the media, its copyright holder, and date it was created as well as its description.
    - NEO
        Near Earth Objects Webservice. This was a bit more complicated to use. It started requiring that send in parameters for the API request.
            There are three options with the API. One for looking up a specific date range which returns a list of objects that the user can look at individually.
            This is done by using the second option which is to look up an astroid by its ID. The third option is to simply browse the full list
            of Astroids that are being tracked in the database. This will display a list that can be paged through. If you click on one to view it,
            then again it goes through the ID lookup call.
    - INSIGHT
        InSight: Mars Weather Service API. This API responds with weather data from Mars for the past week.
            To display this information in an interesting way, I picked up a component suite called DevExtreme to use their radialchart as a windrose.
            It took some time, but it was interesting to explore and the end result looks good. 
        