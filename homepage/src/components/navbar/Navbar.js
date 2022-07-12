/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.scss";

const Navbar = (props) => {
    const { lang, setLang, tab, setTab, availableLangs, availableTabs, content } = props;
    
    const getClassForTab = (item) => {
        return "nav-link text-end" + ( item === tab ? " active" : "" );
    }

    const getClassForLang = (item) => {
        return "dropdown-item text-light" + ( item === lang ? " bg-secondary" : " bg-dark" );
    }

    return (
        <ul className="navbar-nav m-2">
            {
                availableTabs.map((item) => {
                    return ( 
                        <div className="nav-item" key={item}>
                            <a className={getClassForTab(item)} 
                                onClick={() => setTab(item)}
                                >{content[lang].tabs[item].name}
                            </a>
                        </div> 
                    )
                })
            }

            <div className="nav-item dropdown text-end">
                <a  className="nav-link dropdown-toggle" 
                    data-bs-toggle="dropdown" 
                    id="langDropdown" 
                    role="button" 
                    aria-expanded="false">
                    {content[lang].langTabName}
                </a>
                <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="langDropdown">
                    {
                        availableLangs.map((item) => {
                            return (
                                <li key={item}>
                                    <a className={getClassForLang(item)}
                                        onClick={() => setLang(item)}
                                        >{content[item].name}
                                    </a>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>
        </ul>
    )
}

export default Navbar;
