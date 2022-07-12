import Navbar from '../navbar/Navbar';

import './header.scss';

const Header = (props) => {
    const { lang, setLang, tab, setTab, availableTabs, availableLangs, content } = props;

    return (
        <>
        <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a href="/" className="navbar-brand">{ "{ healplease }" }</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbar-menu" 
                    aria-controls="#navbar-menu" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100 justify-content-end bg-dark" id="navbar-menu">
                    <Navbar 
                        lang={lang} 
                        setLang={setLang} 
                        tab={tab} 
                        setTab={setTab}
                        content={content}
                        availableTabs={availableTabs}
                        availableLangs={availableLangs}/>
                </div>
            </div>
        </header>
        <div className="text-center">
            <h1 className="display-4 mb-1 pt-2">{ content[lang].tabs[tab].headline }</h1>
            <p className="lead mt-0">{ content[lang].tabs[tab].subHeadline }</p>
        </div>
        </>
    );
}

export default Header;
