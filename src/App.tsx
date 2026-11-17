
import { useState } from "react";
import "./App.css";
import DaisyFlower from "./components/DaisyFlower"; 
import DaisyAnimation from "./components/DaisyAnimation";
import FloatingHearts from "./components/FloatingHearts";
import Sparkles from "./components/Sparkles";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [started, setStarted] = useState(false);
  const [fallenPetals, setFallenPetals] = useState(0);

  return (
    <main className="welcome-screen">
      <div className="decoration decoration-one">✿</div>
      <div className="decoration decoration-two">♡</div>
      <div className="decoration decoration-three">✧</div>
      <div className="decoration decoration-four">♡</div>

      {!started ? (
        <section className="welcome-content">
          <div className="eyebrow">
            A LITTLE SOMETHING FOR YOU
          </div>

          <div className="flower-container">
            <DaisyFlower className="daisy" />
          </div>

          <h1>
            A little flower,
            <br />
            <span>a little question.</span>
          </h1>

          <p className="subtitle">
            Sometimes the simplest things
            <br />
            can mean the most.
          </p>

          <button
            className="start-button"
            onClick={() => setStarted(true)}
          >
            Let's begin <span>♡</span>
          </button>

          <p className="footer-note">
            Made with love, just for you
          </p>
        </section>
      ) : (
        <section className="welcome-content">
  {!animationComplete ? (
    <>
  <div className="petal-heading">
  <span
    key={fallenPetals}
    className="petal-heading-text"
  >
    {fallenPetals % 2 === 0
      ? "Loves Me ♡"
      : "Loves Me Not ♡"}
  </span>
</div>

      <DaisyAnimation
  onComplete={() => setAnimationComplete(true)}
  onPetalCountChange={setFallenPetals}
/>
    </>
  ) : (
  <>
  <FloatingHearts />
  <Sparkles />

<div className="message-reveal">
  <div className="love-letter">
    <div className="letter-decoration">♡</div>

    <p className="letter-date">A LITTLE SOMETHING FOR YOU</p>

    <h1>My Love ♡</h1>

    <div className="letter-divider"></div>

    <p className="letter-body">
      Your personal message goes here.
    </p>

    <p className="letter-signature">
      With all my love,
      <br />
      Your Name ♡
    </p>
  </div>
</div>

</>
  )}
</section>
      )}
    </main>
  );
}

export default App;
