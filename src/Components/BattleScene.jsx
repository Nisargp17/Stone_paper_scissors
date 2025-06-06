import { useEffect, useRef } from "react";
import gsap from "gsap";
import rockImg from "/src/assets/stone.jpg";
import paperImg from "/src/assets/paper.jpg";
import scissorImg from "/src/assets/scissor.jpg";

const imageMap = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
};

function BattleScene({ playerChoice, aiChoice, result }) {
  const playerRef = useRef();
  const aiRef = useRef();

  useEffect(() => {
    if (!playerChoice || !aiChoice || !result) return;

    const tl = gsap.timeline();

    tl.set([playerRef.current, aiRef.current], { x: 0, opacity: 1 });

    if (result === "player") {
      tl.to(aiRef.current, {
        x: 500,
        opacity: 0,
        duration: 0.7,
        ease: "power3.in",
      });
    } else if (result === "ai") {
      tl.to(playerRef.current, {
        x: -500,
        opacity: 0,
        duration: 0.7,
        ease: "power3.in",
      });
    } else {
      tl.to([playerRef.current, aiRef.current], {
        y: -20,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      });
    }
  }, [result, playerChoice, aiChoice]);

  return (
    <div className="battle-scene">
      <img
        ref={playerRef}
        src={imageMap[playerChoice]}
        alt={playerChoice}
        className="battle-img"
        style={{ zIndex: result === "player" ? 2 : 1 }}
      />
      <img
        ref={aiRef}
        src={imageMap[aiChoice]}
        alt={aiChoice}
        className="battle-img"
        style={{ zIndex: result === "ai" ? 2 : 1 }}
      />
    </div>
  );
}
export default BattleScene;
