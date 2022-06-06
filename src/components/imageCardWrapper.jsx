import React, { Fragment } from 'react';

export default function ImageCardWrapper(params) {
    const { img, name, customClass } = params
    return (
        <Fragment>
            <div className="imageBlurStyle" style={{ backgroundImage: `url(${img})` }}></div>
            <img
                className={customClass}
                src={img}
                srcSet={img}
                alt={name}
                loading="lazy"
            />
        </Fragment>
    );
}
