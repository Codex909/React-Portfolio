import React from 'react';

import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const Mywork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" className="src" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <a key={index} href={work.url} target="_blank" rel="noopener noreferrer" className="image-link">
                        <img src={work.w_img} alt={work.alt} className="image-style" />
                    </a>
                ))}
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default Mywork;