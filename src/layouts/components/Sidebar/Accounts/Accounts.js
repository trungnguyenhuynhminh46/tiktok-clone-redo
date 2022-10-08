// Library
import React from 'react';
import classNames from 'classnames/bind';
// Assets
import styles from './Accounts.module.scss';
// Components
import AccountItem from '~/layouts/components/Sidebar/Accounts/AccountItem';

const cx = classNames.bind(styles);
const Accounts = ({ havePopUp = false }) => {
    return (
        <div className={cx('accounts')}>
            <AccountItem havePopUp={havePopUp}></AccountItem>
            <AccountItem havePopUp={havePopUp}></AccountItem>
            <AccountItem havePopUp={havePopUp}></AccountItem>
            <AccountItem havePopUp={havePopUp}></AccountItem>
            <div className={cx('see-all')}>See all</div>
        </div>
    );
};

export default Accounts;
