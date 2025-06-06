function ScoreCard({ score }) {
  return (
    <div className="score-card">
      <p>👤 Player: {score.player}</p>
      <p>🤖 AI: {score.ai}</p>
      <p>⚖️ Draws: {score.draw}</p>
    </div>
  );
}
export default ScoreCard;
