// Library
import React from 'react';
import classNames from 'classnames/bind';
// Assets
import styles from './Footer.module.scss';
import data from './data';
// Components

const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            {data.map((container, index) => {
                return (
                    <div className={cx('container')} key={index}>
                        {container.map((link, i) => {
                            return (
                                <a href={link.href} className={cx('link')} key={i} target="__blank">
                                    {link.content}
                                </a>
                            );
                        })}
                    </div>
                );
            })}
            <span className={cx('copy-right')}> &copy; 2022 TikTok</span>
        </div>
    );
};

export default Footer;
