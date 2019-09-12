import React from 'react';
import '../custom-button/custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn,itemHover, ...otherProps}) => (
    <button className={`${itemHover?'itemHover':''} ${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
    {children}
    </button>

);

export default CustomButton;