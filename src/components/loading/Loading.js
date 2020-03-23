import React from 'react';
import './Loading.css';
import SVGIcon from '../SVGIcon/SVGIcon';

const Loading = ({ isVisible }) => {
    return (
        <div className={`loadingContainer ${isVisible ? 'visible': ''}`}>
            <SVGIcon name="loading" />
        </div>
    )
}

export default Loading;