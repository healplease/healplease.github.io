const Summary = (props) => {
    const {content, lang, tab} = props;
    const summaryContent = content[lang].tabs[tab].summary;

    if (!summaryContent) return null;

    return (
        <div className="card text-light bg-dark">
            <div className="card-header bg-secondary">
                <h3>{ summaryContent.title }</h3>
            </div>
            <div className="card-body">
                <p>{ summaryContent.text }</p>
            </div>
        </div>
    );
}

export default Summary;
