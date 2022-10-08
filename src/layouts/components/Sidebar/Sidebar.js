// Library
import classNames from 'classnames/bind';
// Assets
import styles from './Sidebar.module.scss';
import { IconHome, IconPeople, IconLive, ActiveIconHome, ActiveIconPeople, ActiveIconLive } from '~/components/Icon';
import config from '~/config';
// Components
import { Menu, MenuItem } from '~/layouts/components/Sidebar/Menu/';
import Accounts from '~/layouts/components/Sidebar/Accounts';
import Tags from '~/layouts/components/Sidebar/Tags';
import Footer from './Footer';
// import Footer from '~/layouts/components/Sidebar/Footer';
const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <aside className={cx('sidebar')}>
            <div className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        to={config.routes.home}
                        title="For You"
                        icon={<IconHome />}
                        activeIcon={<ActiveIconHome />}
                    ></MenuItem>
                    <MenuItem
                        to={config.routes.following}
                        title="Following"
                        icon={<IconPeople />}
                        activeIcon={<ActiveIconPeople />}
                    ></MenuItem>
                    <MenuItem
                        to={config.routes.live}
                        title="LIVE"
                        icon={<IconLive />}
                        activeIcon={<ActiveIconLive />}
                    ></MenuItem>
                </Menu>
                {/* End Menu */}
                <section className={cx('section')}>
                    <h4 className={cx('title')}>Suggested accounts</h4>
                    <Accounts havePopUp></Accounts>
                </section>
                {/* End Suggested accounts */}
                <section className={cx('section')}>
                    <h4 className={cx('title')}>Following accounts</h4>
                    <Accounts></Accounts>
                </section>
                {/* End Following accounts */}
                <section className={cx('section')} style={{ padding: '16px 8px 8px' }}>
                    <h4 className={cx('title')}>Discover</h4>
                    <Tags></Tags>
                </section>
                {/* End Discover */}
                <section className={cx('section')} style={{ padding: '16px 0 0 8px' }}>
                    <Footer></Footer>
                </section>
            </div>
        </aside>
    );
};

export default Sidebar;
