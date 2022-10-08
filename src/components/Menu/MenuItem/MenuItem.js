// Library
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';
// Components

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    let Component = 'div';
    let to = undefined;
    if (!!data.to) {
        Component = Link;
        to = data.to;
    }
    const classes = cx('wrapper', { borderTop: data.borderTop, isLanguage: data.type === 'language' });
    return (
        <Component to={to} className={classes} onClick={onClick}>
            {!!data.before_icon ? data.before_icon : undefined}
            <span className={cx('title')}>{data.title}</span>
            {!!data.after_icon ? data.before_icon : undefined}
        </Component>
    );
};

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
