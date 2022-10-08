// Library
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './Accounts.module.scss';
// Components
import AccountItem from '~/layouts/components/Sidebar/Accounts/AccountItem';

const cx = classNames.bind(styles);
const Accounts = ({ havePopUp = false, data = [], currentPage, lastPage, onViewChange }) => {
    return (
        <div className={cx('accounts')}>
            {data.map((item) => {
                return <AccountItem key={item.id} havePopUp={havePopUp} data={item}></AccountItem>;
            })}
            {currentPage < lastPage || currentPage === 1 ? (
                <div
                    className={cx('see-all')}
                    onClick={() => {
                        onViewChange(true);
                    }}
                >
                    See more
                </div>
            ) : (
                <div
                    className={cx('see-all')}
                    onClick={() => {
                        onViewChange(false);
                    }}
                >
                    See less
                </div>
            )}
        </div>
    );
};

Accounts.propTypes = {
    havePopUp: PropTypes.bool,
    data: PropTypes.array.isRequired,
};

export default Accounts;
