export const GameHeader = ({ score, moves, onReset }) => {
    return (
        <div className="game-header">
            <h1>🎮 Memory Card Game</h1>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">Score: 0</span>{""}
                    <span className="stat-value">{score}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Moves: 0</span>{" "}
                    <span className="stat-value">{moves}</span>
                </div>
            </div>

            <button className="reset-btn" onClick={onReset}>
                New Game
            </button>
        </div>
    );
}