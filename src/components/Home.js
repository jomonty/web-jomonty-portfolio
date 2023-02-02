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

            <div align="center" className="about-image-div">
                <img src={Personal.homeImage} width="30%" className="about-image" alt="about-image"/>
            </div>

            {paragraphNodes}
        </main>
    )
};

export default Home