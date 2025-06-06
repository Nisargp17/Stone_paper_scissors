import { useState } from "react";
import GameUI from "./Components/GameUI";
import BattleScene from "./Components/BattleScene";
import ResultModal from "./Components/ResultModal";
import ScoreCard from "./components/ScoreCard";
import { getAIChoice, determineWinner } from "./Ai/simpleAI";
import "./App.css";
function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAIChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, ai: 0, draw: 0 });

  const handlePlay = (choice) => {
    const ai = getAIChoice();
    const outcome = determineWinner(choice, ai);

    setPlayerChoice(choice);
    setAIChoice(ai);
    setResult(outcome);

    setScore((prev) => ({
      ...prev,
      [outcome]: prev[outcome] + 1,
    }));
  };

  const reset = () => {
    setPlayerChoice(null);
    setAIChoice(null);
    setResult(null);
  };

  return (
    <div className="app">
      <h1>Rock Paper Scissors AI</h1>
      <ScoreCard score={score} />
      {!playerChoice ? (
        <GameUI onPlay={handlePlay} />
      ) : (
        <>
          <BattleScene
            playerChoice={playerChoice}
            aiChoice={aiChoice}
            result={result}
          />
          <ResultModal result={result} onClose={reset} />
        </>
      )}
    </div>
  );
}

export default App;
