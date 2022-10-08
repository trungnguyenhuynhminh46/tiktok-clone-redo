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
const AccountItem = ({ havePopUp = false, data }) => {
    const renderPopUp = (attrs) => (
        <div className={cx('pop-up')} tabIndex="-1" {...attrs}>
            <Popper style={{ padding: 20, width: '32rem' }}>
                <div className={cx('quickview')}>
                    <Link to={`/@${data.nickname}`} className={cx('link')}>
                        <img src={data.avatar} alt={data.first_name} className={cx('logo')} />
                    </Link>
                    <Button
                        fill
                        primary
                        className={cx('follow')}
                        style={{ borderRadius: 4, fontWeight: 400, margin: '-1px 0' }}
                    >
                        Follow
                    </Button>
                </div>
                <div className={cx('info')}>
                    <Link to={`/@${data.nickname}`} className={cx('nickname', 'link')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
                    </Link>
                    <Link to={`/@${data.nickname}`} className={cx('fullname', 'link')}>
                        {`${data.last_name} ${data.first_name}`}
                    </Link>
                </div>
                <p className={cx('social')}>
                    <span className={cx('num')}>{data.followers_count}</span>
                    <span className={cx('content')}>Followers</span>
                    <span className={cx('num')}>{data.likes_count}</span>
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
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image
                        src={data.avatar}
                        alt=""
                        className={cx('thumb')}
                        style={{
                            marginRight: 12,
                        }}
                    />
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
                        </div>
                        <div className={cx('more')}>{`${data.last_name} ${data.first_name}`}</div>
                    </div>
                </Link>
            </Component>
        </div>
    );
};

export default AccountItem;
