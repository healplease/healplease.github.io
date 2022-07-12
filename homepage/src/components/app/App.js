import { useState } from 'react';

import Header from '../header/Header';
import Summary from '../summary/Summary';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';

import data from './content.json';
import './app.scss';

const App = (props) => {
    const { content, availableTabs, availableLangs } = data;

    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', availableLangs[0]);
    }

    const [lang, setLang] = useState(localStorage.getItem('lang'));
    const [tab, setTab] = useState(availableTabs[0]);

    const setLangWithStorage = (lang) => {
        setLang(lang);
        localStorage.setItem('lang', lang);
    }

    return (
        <>
        <Header
            lang={lang} 
            setLang={setLangWithStorage} 
            tab={tab} 
            setTab={setTab} 
            availableTabs={availableTabs}
            availableLangs={availableLangs}
            content={content}/>
        <div className="container">
            <SectionFull>
                <Summary content={content} lang={lang} tab={tab} />
                <Experience content={content} lang={lang} tab={tab} />
            </SectionFull>
            <div className="row">
                <SectionLeft>
                    <Skills content={content} lang={lang} tab={tab} />
                </SectionLeft>
                <SectionRight>

                </SectionRight>
            <Footer lang={lang} tab={tab} content={content} />
            </div>
        </div>
        </>
    )
}

const SectionFull = (props) => {
    return (
        <div className="row"> <div className="col-md-12"> {props.children} </div> </div>
    );
}

const SectionLeft = (props) => {
    return (
        <div className="col-md-8"> {props.children} </div>
    );
}

const SectionRight = (props) => {
    return (<div className="col-md-4"> {props.children} </div>
    );
}

export default App;
