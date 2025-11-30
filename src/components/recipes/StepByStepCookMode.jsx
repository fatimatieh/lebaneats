import React, { useState, useEffect } from "react";

function StepByStepCookMode({ steps, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStep = steps[currentIndex];

 
  const initialSeconds =
    currentStep && currentStep.durationSeconds
      ? currentStep.durationSeconds
      : 60;

  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [running, setRunning] = useState(false);


  useEffect(() => {
    if (!currentStep) return;
    const secs = currentStep.durationSeconds ? currentStep.durationSeconds : 60;
    setSecondsLeft(secs);
    setRunning(false);
  }, [currentIndex, currentStep]);

  
  useEffect(() => {
    if (!running || secondsLeft <= 0) return;

    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, [running, secondsLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const goNext = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!currentStep) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto",
          backgroundColor: "var(--card-bg)",
        }}
      >
        <h2 className="page-title" style={{ fontSize: "1.4rem" }}>
          Cooking mode
        </h2>
        <p className="page-subtitle">
          Step {currentIndex + 1} of {steps.length}
        </p>

        <p style={{ marginBottom: "1rem", fontSize: "1rem" }}>
          {currentStep.text}
        </p>

        {}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ marginBottom: "0.4rem" }}>
            Timer: <strong>{formatTime(secondsLeft)}</strong>
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              type="button"
              className="primary-btn"
              onClick={() => setRunning(true)}
            >
              Start
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => setRunning(false)}
            >
              Pause
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => {
                const secs = currentStep.durationSeconds
                  ? currentStep.durationSeconds
                  : 60;
                setSecondsLeft(secs);
                setRunning(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
            gap: "0.5rem",
          }}
        >
          <button
            type="button"
            className="secondary-btn"
            onClick={goPrev}
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              type="button"
              className="secondary-btn"
              onClick={onClose}
            >
              Exit
            </button>
            <button
              type="button"
              className="primary-btn"
              onClick={goNext}
              disabled={currentIndex === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepByStepCookMode;
