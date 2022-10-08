// Library
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// Assets
import styles from './Tags.module.scss';
// Components
import { IconHashTag, IconMusic } from '~/components/Icon';
const cx = classNames.bind(styles);
const TagItem = ({ type, data }) => {
    return (
        <Link to={`/${type}/${data.slug}`} className={cx('tag-item')}>
            <div className="icon">
                {type === 'tag' ? <IconHashTag></IconHashTag> : undefined}
                {type === 'music' ? <IconMusic></IconMusic> : undefined}
            </div>
            <p className={cx('content')}>
                {type === 'tag' ? data.slug : undefined}
                {type === 'music' ? data.title : undefined}
            </p>
        </Link>
    );
};

export default TagItem;
