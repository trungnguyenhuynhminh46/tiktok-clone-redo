// Library
import React from 'react';
import classNames from 'classnames';
// Assets
import styles from './Home.module.scss';
// Components
const cx = classNames.bind(styles);
const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;
