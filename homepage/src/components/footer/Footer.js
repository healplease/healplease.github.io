const Footer = (props) => {
    const {content, lang} = props;

    return (
        <footer>
            <p className="text-center">{content[lang].footerText}</p>
        </footer>
    );
}

export default Footer;
