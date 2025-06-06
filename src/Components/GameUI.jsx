import rockImg from "/src/assets/stone.jpg";
import paperImg from "/src/assets/paper.jpg";
import scissorImg from "/src/assets/scissor.jpg";
const choices = [
  { type: "rock", img: rockImg },
  { type: "paper", img: paperImg },
  { type: "scissor", img: scissorImg },
];

function GameUI({ onPlay }) {
  return (
    <div className="choices">
      {choices.map(({ type, img }) => (
        <button key={type} onClick={() => onPlay(type)}>
          <img src={img} alt={type} className="choice-img" />
        </button>
      ))}
    </div>
  );
}

export default GameUI;
