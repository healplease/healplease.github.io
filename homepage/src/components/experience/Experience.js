const Experience = (props) => {
    const {content, lang, tab} = props;
    const experienceContent = content[lang].tabs[tab].companies;

    if (!experienceContent) return;

    return (
        <>
        {
            experienceContent.map((company, index) => {
                return (
                    <div className="card bg-dark mb-2" key={index}>
                        <h3 className="card-header bg-secondary">
                            {company.name}
                        </h3>
                        <div className="card-body p-0">
                            <div className="list-group">
                                {
                                    company.projects.map((project, index) => {
                                        return (
                                            <div className="list-group-item bg-dark text-light" key={index}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-3">
                                                        <a  target="_blank" 
                                                            rel="noreferrer" 
                                                            href={project.url}
                                                            aria-disabled={ Boolean(project.url) }>
                                                            {project.name}
                                                        </a>
                                                    </h5>
                                                    <small className="text-right">{project.term}</small>
                                                </div>
                                                <p className="mb-2">{project.position}</p>
                                                <small>{project.description}</small>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
}

export default Experience;
