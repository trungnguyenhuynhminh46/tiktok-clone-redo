// Library
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// Assets
import styles from './Accounts.module.scss';
// Components
import Image from '~/components/Image';
import Popper from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const AccountItem = ({ havePopUp = false }) => {
    const renderPopUp = (attrs) => (
        <div className={cx('pop-up')} tabIndex="-1" {...attrs}>
            <Popper style={{ padding: 20, width: '32rem' }}>
                <div className={cx('quickview')}>
                    <Link to="/@nickname" className={cx('link')}>
                        <img
                            src="https://images.unsplash.com/photo-1665029511421-15c67252a651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt=""
                            className={cx('logo')}
                        />
                    </Link>
                    <Button fill primary className={cx('follow')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('info')}>
                    <Link to="/@nickname" className={cx('nickname', 'link')}>
                        <span>trungnguyen46</span>
                        {true && <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
                    </Link>
                    <Link to="/@nickname" className={cx('fullname', 'link')}>
                        Nguyễn Huỳnh Minh Trung
                    </Link>
                </div>
                <p className={cx('social')}>
                    <span className={cx('num')}>7.5M</span>
                    <span className={cx('content')}>Followers</span>
                    <span className={cx('num')}>521.1M</span>
                    <span className={cx('content')}>Likes</span>
                </p>
            </Popper>
        </div>
    );
    let Component = 'div';
    let props = undefined;
    if (havePopUp) {
        Component = Tippy;
        props = {
            interactive: true,
            offset: [-8, 2],
            delay: [1000, 0],
            placement: 'bottom-start',
            render: renderPopUp,
        };
    }

    return (
        <div>
            <Component {...props}>
                <Link to={`/@nickname`} className={cx('account-item')}>
                    <Image
                        src="https://images.unsplash.com/photo-1665029511421-15c67252a651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                        className={cx('thumb')}
                        style={{
                            marginRight: 12,
                        }}
                    />
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <span>trungnguyen46</span>
                            {true && <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
                        </div>
                        <div className={cx('more')}>{'Nguyễn Huỳnh Minh Trung'}</div>
                    </div>
                </Link>
            </Component>
        </div>
    );
};

export default AccountItem;
