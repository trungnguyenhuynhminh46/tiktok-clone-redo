// Library
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// Assets
import styles from './JustHeader.module.scss';
// Components
import Header from '~/layouts/components/Header';

const cx = classNames.bind(styles);
const JustHeader = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className="content">{children}</div>
        </div>
    );
};

JustHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default JustHeader;
