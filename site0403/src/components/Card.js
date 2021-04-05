import React from 'react';

const Card = (props) => {
    return (
        <div className="ui card">
            <div className="image">
                <a className="tempo_image">ここに画像が入ります。</a>
            </div>
            <div className="content">
                <a className="header">Kristy</a>
                <div className="meta">
                <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                Kristy is an art director living in New York.
                </div>
            </div>
            <div className="extra content">
                <a>
                <i className="user icon"></i>
                22 Friends
                </a>
            </div>
        </div>
    );
};

export default Card