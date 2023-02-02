import TechIconList from './TechIconList';
import Tech from '../data/Tech';
import Personal from '../data/Personal';

const Skills = () => {

    const paragraphNodes = Personal.skillContent.map((paragraph, index) => {
        return (
            <p key={index}>{paragraph}</p>
        )
    })

    return (
        <main className="container">
            <TechIconList tech={Tech}/>
            {paragraphNodes}
        </main>
    )
}

export default Skills