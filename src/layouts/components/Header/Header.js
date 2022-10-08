// Library
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// Assets
import styles from './Header.module.scss';
import images from '~/assets/images';
// Component
import {
    IconPlus,
    IconElipsis,
    IconPaperPlane,
    IconMessageBox,
    IconUser,
    IconTiktokCircle,
    IconGear,
    IconKeyboardCircle,
    IconLanguages,
    IconLogout,
    IconQuestion,
} from '~/components/Icon';
import Button from '~/components/Button';
import Search from '~/components/Search';
import Image from '~/components/Image';
import Menu from '~/components/Menu';
const cx = classnames.bind(styles);
let currentUser = {
    avatar: 'https://images.unsplash.com/photo-1664918146611-24194fe9b947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
};
// currentUser = false;
const MENU_ITEMS = [
    {
        before_icon: <IconLanguages width="20px" height="20px" margin={'0 8px 0 0'}></IconLanguages>,
        title: 'English',
        children: {
            header: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                    type: 'language',
                },
            ],
        },
    },
    {
        before_icon: <IconQuestion width="20px" height="20px" margin={'0 8px 0 0'}></IconQuestion>,
        title: 'Feedback and help',
        to: '/feedback',
        onClick: (item) => {
            alert('Hahaha');
        },
    },
    {
        before_icon: <IconKeyboardCircle width="20px" height="20px" margin={'0 8px 0 0'}></IconKeyboardCircle>,
        title: 'Keyboard shortcuts',
    },
];
const USER_MENU_ITEMS = [
    {
        before_icon: <IconUser width="20px" height="20px" margin={'0 8px 0 0'}></IconUser>,
        title: 'View profile',
        to: '/@nickname',
    },
    {
        before_icon: <IconTiktokCircle width="20px" height="20px" margin={'0 8px 0 0'}></IconTiktokCircle>,
        title: 'Get coins',
        to: '/coin',
    },
    {
        before_icon: <IconGear width="20px" height="20px" margin={'0 8px 0 0'}></IconGear>,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        before_icon: <IconLogout width="20px" height="20px" margin={'0 8px 0 0'}></IconLogout>,
        title: 'Log out',
        borderTop: true,
        to: '/logout',
    },
];

const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <Link className={cx('logo')} to="/">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search></Search>
                <nav className={cx('navigations')}>
                    <div className={cx('nav')} style={{ marginLeft: 0 }}>
                        <Button outline to="/upload" style={{ minWidth: 110, padding: '0 16px', borderRadius: '2px' }}>
                            <IconPlus width={20} height={20} margin={'0 8px 0 0'}></IconPlus>
                            <span style={{ lineHeight: '24px' }}>Upload</span>
                        </Button>
                    </div>
                    {!!currentUser ? (
                        // User is logged in
                        <>
                            <Tippy content="Messages">
                                <div className={cx('nav')} style={{ marginLeft: 16 }}>
                                    <Button to="/messages" style={{ padding: '0px 3px' }}>
                                        <IconPaperPlane width={26} height={26}></IconPaperPlane>
                                    </Button>
                                </div>
                            </Tippy>
                            <Tippy content="Inbox">
                                <div className={cx('nav')} style={{ marginLeft: 16 }}>
                                    <Button>
                                        <IconMessageBox width={32} height={32}></IconMessageBox>
                                    </Button>
                                </div>
                            </Tippy>
                            <Menu items={USER_MENU_ITEMS} maxHeight={'64rem'} offset={[12, 14]}>
                                <div className={cx('nav')} style={{ marginLeft: 24 }}>
                                    <Button style={{ width: 32, height: 32 }}>
                                        <Image
                                            src={currentUser.avatar}
                                            alt="Ảnh đại diện"
                                            className={cx('user-thumb')}
                                            fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                        ></Image>
                                    </Button>
                                </div>
                            </Menu>
                        </>
                    ) : (
                        // User is not logged in
                        <>
                            <div className={cx('nav')} style={{ marginLeft: '1.6rem' }}>
                                <Button
                                    to="/login"
                                    fill
                                    primary
                                    style={{ minWidth: 100, padding: '6px 8px', borderRadius: '4px' }}
                                >
                                    Log in
                                </Button>
                            </div>
                            <Menu items={MENU_ITEMS}>
                                <div className={cx('nav')} style={{ marginLeft: '1.6rem' }}>
                                    <Button style={{ padding: '0 4px' }}>
                                        <IconElipsis width={20} height={20}></IconElipsis>
                                    </Button>
                                </div>
                            </Menu>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
