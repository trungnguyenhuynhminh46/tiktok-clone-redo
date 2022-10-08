// Library
import React, { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './Menu.module.scss';
import Popper from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenyHeader/MenuHeader';
// Components

const cx = classNames.bind(styles);
const Menu = ({ children, items = [], maxHeight = 244, offset = [12, 6], hideOnClick = false }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    // Handlers
    function handleResetMenu() {
        setHistory((prev) => {
            return prev.slice(0, 1);
        });
    }
    function handleBackMenu() {
        setHistory((prev) => {
            return prev.slice(0, prev.length - 1);
        });
    }
    function handleParentClick(item) {
        setHistory((prev) => {
            return [...prev, item.children];
        });
    }
    function handleChildrenClick(item) {
        if (!!item.onClick) {
            item.onClick(item);
        } else {
            console.log(item);
        }
    }
    const renderItems = () => {
        return current.data.map((item, index) => {
            let isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={
                        isParent
                            ? () => {
                                  handleParentClick(item);
                              }
                            : () => {
                                  handleChildrenClick(item);
                              }
                    }
                ></MenuItem>
            );
        });
    };
    return (
        <div>
            <TippyHeadless
                interactive
                placement="bottom-end"
                offset={offset}
                delay={[0, 500]}
                onHide={handleResetMenu}
                hideOnClick={hideOnClick}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <Popper className={cx('wrapper')} style={{ maxHeight: maxHeight }}>
                            {/* If has children show title */}
                            {history.length > 1 ? (
                                <MenuHeader onClick={handleBackMenu}>{current.header}</MenuHeader>
                            ) : undefined}
                            {/* render tabs*/}
                            <div
                                className={cx('menu-items', { isChildren: !!current.header })}
                                style={history.length > 1 ? { marginTop: '4.2rem' } : undefined}
                            >
                                {renderItems()}
                            </div>
                        </Popper>
                    </div>
                )}
            >
                {children}
            </TippyHeadless>
        </div>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.array,
    hideOnClick: PropTypes.bool,
};

export default Menu;
