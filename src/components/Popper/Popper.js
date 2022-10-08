// Library
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './Popper.module.scss';
// Components

const cx = classNames.bind(styles);
const Popper = ({ children, style, className }) => {
    return (
        <div className={cx('wrapper', className)} tabIndex="-1" style={style}>
            {children}
        </div>
    );
};

Popper.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default Popper;
