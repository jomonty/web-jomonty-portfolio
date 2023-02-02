import Tech from './Tech';

const Projects = [
    {
        id: 1,
        active: true,
        name: 'The Little Gym',
        github: "https://github.com/jomonty/python_project_gym_app",
        image: "/portfolio-images/the_little_gym_1.png",
        description: [
            "A full stack app build with Python, Flask, PostgreSQL, HTML & CSS with CRUID functionality to allow a gym to manage memberships, classes, and the registration of members to classes.",
            "This was my first end to end full stack app and I really enjoyed designing and building it, I managed to squeeze in a few extensions over the MVP and I was really proud of the result! We have a few restrictions to keep us to the Python/Flask stack such as no JS, no ORM, no prebuilt CSS libraries.",
            "I designed the database in PostgreSQL, database handling and interaction in Python with the psycopg2 library, route handling with Flask, templates with Jinja, styling with CSS and unit tests with Pythons unittest module. The logic in the controller/router was by far the most challenging though most enjoyable part of the project.",
            "Full details of the brief are available in the GitHub repo's README."
            
        ],
        tech: ['python', 'flask', 'postgresql', 'html5', 'css3'].map(tech => {
            return Tech.find(element => element.name === tech);
        })
    },
    {
        id: 2,
        active: true,
        name: 'beeCareful',
        github: "https://github.com/jomonty/javascript_project_beeCareful",
        image: "/portfolio-images/beeCareful_1.png",
        description: [
            "This was a group project at Codeclan. Our brief was to build a full-stack application using React, Express and MongoDB, and get experience using git in a team. One of our team members is a beekeeper so we decided to build an app to manage apiaries (groups of colonies), colonies and inspections.",
            "Our MVP included a React front-end, an Express/MongoDB backend and CRUD functionality for colonies and inspections, we had extensions covering dynamic display of information on colonies depending on properties of the latest inspection, inclusion of an API call to OpenWeather to show upcoming weather for the colonies, and the capability to have multiple apiaries.",
            "We discovered some challenges early on in the project – we essentially wanted a relational structure in the data model which needed some thought for MongoDB, this was my job. I designed a relational data model for the database, and I designed and built the server using Express, managing to keep the complexity of the logic needed to manage the relational structure (mostly!) abstracted to the server code.",
            "I also implemented a skeleton structure for the client, client-side logic to handle CRUD operations and managed our git workflow as well as problem solving and bug fixing through the full client. Working through this project in a team was a great experience and it really hammered home the importance of a good git workflow.",
            "Full details of the project and my team are available on the GitHub repo's README."
        ],
        tech: ['javascript', 'react', 'express', 'mongodb', 'html5', 'css3'].map(tech => {
            return Tech.find(element => element.name === tech);
        })
    },
    {
        id: 3,
        active: false,
        name: 'Project 3',
        github: "https://githib.com/jomonty/",
        image: "",
        description: [],
        tech: []
    }
]

export default Projects;