import { useState } from 'react';
import './Card.css';
import emojiPuzzleData from '../../assets/puzzleData';

const Card = () => {

    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
    const [showSolution, setShowSolution] = useState(false);

    const currentEmojiData = emojiPuzzleData[currentEmojiIndex];

    const handleNextEmoji = () => {
        setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojiPuzzleData.length);
        setShowSolution(false);
    };

    const handlePrevEmoji = () => {
        setCurrentEmojiIndex((prevIndex) =>
            prevIndex === 0 ? emojiPuzzleData.length - 1 : prevIndex - 1
        );
        setShowSolution(false);
    };

    const toggleSolution = () => {
        setShowSolution(!showSolution);
    };

    return (
        <div className="app-container">
            <div className="emoji">
            <h2>Emoji Puzzle</h2>
                <div className="one-card">
                    <div className="arrows">
                        <span className="arrow" onClick={handlePrevEmoji}>
                            &#9664;
                        </span>
                    </div>
                    <div
                        className={`card ${showSolution ? 'show-solution' : ''}`}
                        onClick={toggleSolution}
                    >
                        {currentEmojiData.emojiPuzzle}
                    </div>
                    <div className="arrows">
                        <span className="arrow" onClick={handleNextEmoji}>
                            &#9654;
                        </span>
                    </div>
                </div>
                {showSolution && (
                    <div className="solution-description">
                        <p className="solution">{currentEmojiData.solution}</p>
                        <p className="description">{currentEmojiData.description}</p>
                        {currentEmojiData.projects && (
                            <div className="projects">
                                <h3>Project Ideas:</h3>
                                <ul>
                                    {currentEmojiData.projects.map((project, index) => (
                                        <li key={index}>{project}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

    )
}

export default Card;

