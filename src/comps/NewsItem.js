import React from 'react';
import { useState } from 'react';
import './NewsItem.css';

const NewsItem = (props) => {

    let { title, description, imageUrl, newsURL, author, date, month, day, badge } = props;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [active, setActive] = useState(false);

    const handleOn = () => setActive(true);
    const handleOut = () => setActive(false);

    return (
        <div>

            <div className={`card my-3 card-zero-radius ${active === true ? 'big-card' : ''}`} style={{ display: 'flex', padding: '0px', margin: '75px 50px 0 auto' }}>

            {/* <div className={`card my-3 card-zero-radius ${active === true ? 'big-card' : ''}`} onMouseOver={handleOn} onMouseOut={handleOut} style={{ display: 'flex', padding: '0px', margin: '75px 50px 0 auto' }}> */
            }
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ position: 'absolute', zIndex: '1' }} >
                    {badge}
                </span>
                <a href={newsURL} target='_blank'>
                    <img src={!imageUrl ? imageUrl = "https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000" : imageUrl} className="card-img-top" alt="..." style={{ cursor: "pointer" }} />
                </a>
                <div className="card-body mx-1">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary"> By {author ? author : "unknown"} on {days[day]}, {date}/{month}</small></p>
                    <a href={newsURL} target='_blank' className="btn btn-sm btn-primary">More info</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem