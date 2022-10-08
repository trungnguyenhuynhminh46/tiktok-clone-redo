// Library
import React from 'react';
import { Link } from 'react-router-dom';
import classNamesBind from 'classnames/bind';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Assets
import styles from './Button.module.scss';

const cx = classNamesBind.bind(styles);
const Button = ({
    to,
    href,
    style,
    className,
    children,
    primary,
    outline,
    fill,
    pillStyle,
    noBorder,
    ...remainProps
}) => {
    // Component, props, classes
    // style: width, padding, margin
    let Component = 'button';
    let props = {
        style,
        ...remainProps,
    };
    let classes = classNames(cx('wrapper', { primary, outline, fill, pillStyle, noBorder }), className);
    if (!!to) {
        Component = Link;
        props.to = to;
    }
    if (!!href) {
        Component = 'a';
        props.href = href;
    }
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    fill: PropTypes.bool,
    pillStyle: PropTypes.bool,
    noBorder: PropTypes.bool,
};
export default Button;
