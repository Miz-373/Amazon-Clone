import React, {useState, useEffect } from 'react';
import './Scroll.css';

const Scroll = (
    showBelow
) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })
    const handleClick = () => {
        window[`scrollTo`]({ top:0, behavior: `smooth`})
    }
    return (
        <button className="back-to-top" onClick={handleClick}>
            <span className="big-button">Back to top</span><span className="arrow">&#8593;</span>
        </button>
    )
}

export default Scroll;
