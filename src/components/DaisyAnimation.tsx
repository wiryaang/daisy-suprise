
import { useEffect, useState } from "react";
import DaisyFlower from "./DaisyFlower";

interface DaisyAnimationProps {
  onComplete: () => void;
  onPetalCountChange: (count: number) => void;
}

function DaisyAnimation({
  onComplete,
  onPetalCountChange,
}: DaisyAnimationProps) {
  const [fallenPetals, setFallenPetals] = useState(0);
  const [fallingPetal, setFallingPetal] = useState(-1);

  useEffect(() => {
    if (fallenPetals >= 8) {
      onComplete();
      return;
    }

    const startTimer = window.setTimeout(() => {
      setFallingPetal(fallenPetals);
    }, 400);

    return () => window.clearTimeout(startTimer);
  }, [fallenPetals, onComplete]);

  useEffect(() => {
    if (fallingPetal === -1) return;

    const finishTimer = window.setTimeout(() => {
    setFallenPetals((previous) => {
  const next = previous + 1;
  onPetalCountChange(next);
  return next;
});

setFallingPetal(-1);
    }, 1200);

    return () => window.clearTimeout(finishTimer);
  }, [fallingPetal]);

  return (
  <div className="flower-container">


    <DaisyFlower
      className="daisy"
      fallingPetal={fallingPetal}
      fallenPetals={fallenPetals}
    />
  </div>
);
}

export default DaisyAnimation;
