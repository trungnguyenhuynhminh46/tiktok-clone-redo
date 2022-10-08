// Library
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// Assets
import styles from './Menu.module.scss';
// Components
const cx = classNames.bind(styles);
const MenuItem = ({ icon, activeIcon, title, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return cx('menu-item', { active: isActive });
            }}
            end
        >
            <div className={cx('icon')}>{icon}</div>
            <div className={cx('active-icon')}>{activeIcon}</div>
            <div className={cx('title')}>{title}</div>
        </NavLink>
    );
};

MenuItem.propTypes = {
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
};
export default MenuItem;
