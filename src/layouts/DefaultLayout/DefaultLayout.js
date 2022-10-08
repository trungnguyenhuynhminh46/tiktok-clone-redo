// Library
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './DefaultLayout.module.scss';
// Components
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <section className={cx('body')}>
                <div className={cx('container')}>
                    <Sidebar></Sidebar>
                    <div className={cx('content')}>{children}</div>
                </div>
            </section>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
