const Skills = (props) => {
    const { content, lang, tab } = props;
    const skillsContent = content[lang].tabs[tab].skills;
    if (!skillsContent) return;

    return (
        <div className="card mt-2 bg-dark">
            <div className="card-header bg-secondary">
                <h3>{skillsContent.title}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    {skillsContent.categories.map((category, index) => {
                        return (
                            <>
                            <div className="col-md-4" key={index}>
                                <p className="mb-1"><b>{category.name}</b></p>
                                <ul className="list-unstyled">
                                    {category.skills.map((skill, index) => { return ( <li key={index}><small>{skill}</small></li> ); })}
                                </ul>
                            </div>
                            </>
                        );
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Skills;
