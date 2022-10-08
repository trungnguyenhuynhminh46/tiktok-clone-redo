// Library
import React from 'react';
import classNames from 'classnames/bind';
// Assets
import styles from './Sidebar.module.scss';
// Components

const cx = classNames.bind(styles);
const Sidebar = () => {
    return <h1 className={cx('wrapper')}>Sidebar</h1>;
};

export default Sidebar;
