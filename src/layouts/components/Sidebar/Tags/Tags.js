// Library
import React from 'react';
import classNames from 'classnames/bind';
// Assets
import styles from './Tags.module.scss';
// Components
import TagItem from './TagItem';
const cx = classNames.bind(styles);
const Tags = () => {
    return (
        <div className={cx('tags')}>
            <TagItem type="tag" data={{ slug: 'suthatla' }}></TagItem>
            <TagItem type="tag" data={{ slug: 'mackedoi' }}></TagItem>
            <TagItem
                type="music"
                data={{ title: 'Yêu đơn phương là gì (MEE Remix)', slug: 'music-code-123' }}
            ></TagItem>
        </div>
    );
};

export default Tags;
