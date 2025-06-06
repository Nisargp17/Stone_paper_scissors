function ResultModal({ result, onClose }) {
  if (!result) return null;

  const textMap = {
    player: "You Win! 🎉",
    ai: "Better luck next time 😢",
    draw: "It's a Draw 🤝",
  };

  return (
    <div className="result-modal">
      <h2>{textMap[result]}</h2>
      <button onClick={onClose}>Play Again</button>
    </div>
  );
}

export default ResultModal;
