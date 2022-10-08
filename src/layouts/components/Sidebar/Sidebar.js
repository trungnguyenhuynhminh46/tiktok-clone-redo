// Library
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
// Assets
import styles from './Sidebar.module.scss';
import { IconHome, IconPeople, IconLive, ActiveIconHome, ActiveIconPeople, ActiveIconLive } from '~/components/Icon';
import config from '~/config';
import { userService } from '~/services';
// Components
import { Menu, MenuItem } from '~/layouts/components/Sidebar/Menu/';
import Accounts from '~/layouts/components/Sidebar/Accounts';
import Tags from '~/layouts/components/Sidebar/Tags';
import Footer from './Footer';
// import Footer from '~/layouts/components/Sidebar/Footer';
const cx = classNames.bind(styles);
const INITIAL_PAGE = 1;
const Per_Page = 5;

const Sidebar = () => {
    // Suggested users
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [pageSuggestedUsers, setPageSuggestedUsers] = useState(INITIAL_PAGE);
    const [lastPageSuggestedUsers, setLastPageSuggestedUsers] = useState(1);
    // Following users
    const [followingUsers, setFollowingUsers] = useState([]);
    const [pageFollowingUsers, setPageFollowingUsers] = useState(INITIAL_PAGE);
    const [lastPageFollowingUsers, setLastPageFollowingUsers] = useState(1);
    useEffect(() => {
        // Suggested users
        userService
            .getSuggested({
                page: pageSuggestedUsers,
                perPage: Per_Page,
            })
            .then((response) => {
                setSuggestedUsers(response.data);
                setLastPageSuggestedUsers(response.meta.pagination.total_pages);
            })
            .catch((err) => {
                console.log(err);
            });
        // Following users
        userService
            .getFollowing({
                page: pageFollowingUsers,
            })
            .then((response) => {
                setFollowingUsers(response.data);
                setLastPageFollowingUsers(response.meta.pagination.total_pages);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Handler
    const handleViewChangeSuggestedUsers = async (isSeeMore = true) => {
        if (isSeeMore) {
            setPageSuggestedUsers((prev) => prev + 1);
            let newPage = pageSuggestedUsers + 1;
            const response = await userService.getSuggested({
                page: newPage,
                perPage: Per_Page,
            });
            const currentPageData = response.data;
            setSuggestedUsers((prev) => {
                return [...prev, ...currentPageData];
            });
        } else {
            setPageSuggestedUsers(1);
            let newPage = 1;
            const currentPageData = await userService
                .getSuggested({
                    page: newPage,
                    perPage: Per_Page,
                })
                .then((res) => res.data);
            setSuggestedUsers((prev) => {
                return [...currentPageData];
            });
        }
    };
    const handleViewChangeFollowingUsers = async (isSeeMore = true) => {
        if (isSeeMore) {
            setPageFollowingUsers((prev) => prev + 1);
            let newPage = pageFollowingUsers + 1;
            const response = await userService.getFollowing({
                page: newPage,
                perPage: Per_Page,
            });
            const currentPageData = response.data;
            setFollowingUsers((prev) => {
                return [...prev, ...currentPageData];
            });
        } else {
            setPageFollowingUsers(1);
            let newPage = 1;
            const currentPageData = await userService
                .getFollowing({
                    page: newPage,
                    perPage: Per_Page,
                })
                .then((res) => res.data);
            setFollowingUsers((prev) => {
                return [...currentPageData];
            });
        }
    };

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
                    <Accounts
                        havePopUp
                        data={suggestedUsers}
                        currentPage={pageSuggestedUsers}
                        lastPage={lastPageSuggestedUsers}
                        onViewChange={handleViewChangeSuggestedUsers}
                    ></Accounts>
                </section>
                {/* End Suggested accounts */}
                <section className={cx('section')}>
                    <h4 className={cx('title')}>Following accounts</h4>
                    <Accounts
                        data={followingUsers}
                        currentPage={pageFollowingUsers}
                        lastPage={lastPageFollowingUsers}
                        onViewChange={handleViewChangeFollowingUsers}
                    ></Accounts>
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
