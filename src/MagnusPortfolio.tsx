import React from 'react';
import './MagnusPortfolio.css';

export function MagnusPortfolio():React.JSX.Element{
    return(
        <div>
            <div className='grid'>
                <div className="video-container" id="column1">
                    <iframe className="video"  src="https://youtube.com/embed/VaP5ZQPbNB0" allowFullScreen title="HONR291"></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/vlJ8E4v2IQM" allowFullScreen title="Orwell"></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/YhBT5LQWPfI" allowFullScreen title="Interview"></iframe>
                </div>
                <div>
                <h1 className='title'>
                    HONR291 Final Project:
                </h1>
                <p className='desc'>
                    For this class I chose to make my final project a game. It combines literally analysis with puzzles in the style of a point and click. I solely developed it in Godot Game Engine.
                </p>
                <h1 className='title'>
                    Orwell Discord Moderation:
                </h1>
                <p className='desc'>
                    This was my project for HenHacks 2025. Ben, Andrew, and I created a discord bot that read messages and used AI to compare the content against the ruleset of the server to determine if it was appropriate.
                </p >
                <h1 className='title'>
                    Random Video:
                </h1>
                <p className='desc'>
                    This was a demo video I had to make as part of the interview process for a job I didnt get evil evil evil
                </p>
            </div>
            </div>
        </div>
    )
}