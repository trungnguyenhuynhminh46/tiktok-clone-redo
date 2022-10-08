// Library
import React from 'react';
import classNames from 'classnames/bind';
// Assets
import styles from './Menu.module.scss';
// Components
const cx = classNames.bind(styles);
const Menu = ({ children }) => {
    return <div className={cx('menu')}>{children}</div>;
};

export default Menu;
