
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameCard from './GameCard';

const GameSelectionPage = ({ games }) => {
    let navigate = useNavigate();

    const handleGameSelect = (path) => {
        navigate(path);
    };

    return (
        <div>



            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {games.map(game => (
                    <GameCard
                        key={game.id}
                        title={game.title}
                        onClick={() => handleGameSelect(game.path)}
                    />
                ))}
            </div>
        </div >
    );
};

export default GameSelectionPage;
