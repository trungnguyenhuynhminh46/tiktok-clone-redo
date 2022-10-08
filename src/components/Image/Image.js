import React from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const Image = ({ src, alt, style, className, fallback: defaultFallback = images.image_holder }) => {
    const [fallback, setFallback] = React.useState(undefined);
    return (
        <img
            src={fallback || src}
            alt={alt}
            onError={(e) => {
                setFallback(defaultFallback);
            }}
            className={className}
            style={style}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
