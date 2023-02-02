import Personal from '../data/Personal'

const Home = () => {

    const paragraphNodes = Personal.homeContent.map((paragraph, index) => {
        return (
            <p key={index}>{paragraph}</p>
        )
    })

    return (
        <main className="container">
            <h3>{Personal.title}</h3>
            {paragraphNodes}
            {/* <p>Hi! My name is Josh Montgomery, and I'm a Glasgow based software developer.</p>
            <p>After several years working in utilties, I found myself enjoying using the tools I used to do
                my work. This enjoyment turned into a drive to understand more and I began to teach myself 
                through self-guided study, online courses, and building some personal projects.
            </p>
            <p>In late 2022, I made the leap to enroll at 
                    <span> <a href="https://www.codeclan.com" target="_blank" rel="noreferrer">Codeclan</a> </span>
                and I'm currently on their 16 week Professional Software Development course.
            </p> */}
        </main>
    )
};

export default Home