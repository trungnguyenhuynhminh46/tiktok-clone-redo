// Library
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Assets
import styles from './AccountItem.module.scss';
// Components
import Image from '~/components/Image';
const cx = classNames.bind(styles);
const AccounItem = ({ beforeIcon, afterIcon, data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <span className={cx('thumb')}>
                <Image src={data.avatar} alt="" />
            </span>
            <div className={cx('info')}>
                <div className={cx('nickname')}>
                    {beforeIcon}
                    {data.nickname}
                    {afterIcon}
                </div>
                <div className={cx('fullname')}>data.full_name</div>
            </div>
        </Link>
    );
};
AccounItem.propTypes = {
    beforeIcon: PropTypes.node,
    afterIcon: PropTypes.node,
    data: PropTypes.object.isRequired,
};

export default AccounItem;
