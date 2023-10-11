import styles from '../PageTitle/PageTitle.module.scss';
import React from 'react';

const NotFound = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>404 - Page not found</h1>
            <p className={styles.subtitle}>We're sorry, but we can't find the page you're looking for.</p>
        </div>
    );
};

export default NotFound;