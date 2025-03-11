import React from 'react';
import './MagnusPortfolio.css';

export function MagnusPortfolio():React.JSX.Element{
    return(
        <div>
            <div id="column1">
                <div className="video-container">
                    <iframe className="video"  src="https://youtube.com/embed/VaP5ZQPbNB0" allowFullScreen></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/vlJ8E4v2IQM" allowFullScreen></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/YhBT5LQWPfI" allowFullScreen></iframe>
                </div>
            </div>
            <div id="column2">
                <h1>
                    HONR291 Final Project:
                </h1>
                <p>
                    For this class I chose to make my final project a game. It combines literally analysis with puzzles in the style of a point and click. I solely developed it in Godot Game Engine
                </p>
            </div>
        </div>
    )
}