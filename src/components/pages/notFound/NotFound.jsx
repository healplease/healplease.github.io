import React from "react";

import './not-found.scss';

const classes = {
    notFound: "not-found",
    notFoundTitle: "not-found-title",
    notFoundSubtitle: "not-found-subtitle",
    notFoundButton: "not-found-button"
};

const NotFound = () => {
    return (
        <main className={classes.notFound}>
            <h1 className={classes.notFoundTitle}>404</h1>
            <h2 className={classes.notFoundSubtitle}>Page not found</h2>
            <a href="/" className={classes.notFoundButton}>Go back</a>
        </main>
    );
};

export default NotFound;