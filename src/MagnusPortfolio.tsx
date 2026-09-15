import React from 'react';
import './MagnusPortfolio.css';

export function MagnusPortfolio():React.JSX.Element{
    return(
        <div>
            <div className='grid'>
                <div className="video-container" id="column1">
                    <iframe className="video"  src="https://www.youtube.com/embed/KpCysp8j-Pg?si=ptLp6mWl6ZV3jSUC" allowFullScreen title="TumbleTracker"></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/VaP5ZQPbNB0" allowFullScreen title="HONR291"></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/vlJ8E4v2IQM" allowFullScreen title="Orwell"></iframe>
                    <iframe className="video"  src="https://www.youtube.com/embed/RVgxDD6JTLc?si=gni6S9Ni8-w5Hy6X" allowFullScreen title="Ball Game"></iframe>
                    <iframe className="video"  src="https://youtube.com/embed/YhBT5LQWPfI" allowFullScreen title="Interview"></iframe>
                </div>
                <div>
                <h1 className='title'>
                    Hackathon Project:
                </h1>
                <p className='desc'>
                    This was the project I made with a team for HenHacks 2026. Our goal was to challenge ourselves and make something usable in 24 hours.
                </p>    
                <h1 className='title'>
                    HONR291 Final Project:
                </h1>
                <p className='desc'>
                    For this class I chose to make my final project a game. It combines literary analysis with puzzles in the style of a point and click. I solely developed it in Godot Game Engine.
                </p>
                <h1 className='title'>
                    Orwell Discord Moderation:
                </h1>
                <p className='desc'>
                    This was my project for HenHacks 2025. Ben, Andrew, and I created a discord bot that read messages and used AI to compare the content against the ruleset of the server to determine if it was appropriate.
                </p >
                <h1 className='title'>
                    Freshman Game:
                </h1>
                <p className='desc'>
                    This is a game I made in freshman year. It is made in Python with Drafter.
                </p>
                <h1 className='title'>
                    Random Video:
                </h1>
                <p className='desc'>
                    This was a demo video I had to make as part of an interview process.
                </p>
            </div>
            </div>
        </div>
    )
}