export const getAIChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const determineWinner = (player, ai) => {
  if (player === ai) return "draw";
  if (
    (player === "rock" && ai === "scissor") ||
    (player === "paper" && ai === "rock") ||
    (player === "scissor" && ai === "paper")
  ) {
    return "player";
  }
  return "ai";
};
