//  Library
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
// Assets
import styles from './MenuHeader.module.scss';
import Button from '~/components/Button';
// Components
const cx = classNames.bind(styles);
const MenuHeader = ({ children, onClick }) => {
    return (
        <div className={cx('wrapper')}>
            <Button className={cx('back')} onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <span className={cx('header')}>{children}</span>
        </div>
    );
};

MenuHeader.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default MenuHeader;
