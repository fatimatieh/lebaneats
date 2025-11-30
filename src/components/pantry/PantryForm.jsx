import React, { useState, useEffect } from "react";

function StepByStepCookMode({ steps, onClose }) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const [secondsLeft, setSecondsLeft] = useState(
    step?.durationSeconds || 0
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!step || !step.durationSeconds) {
      setSecondsLeft(0);
      setRunning(false);
      return;
    }
    setSecondsLeft(step.durationSeconds);
    setRunning(false);
  }, [index, step]);

  useEffect(() => {
    if (!running || secondsLeft <= 0) return;
    const id = setInterval(
      () => setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
    return () => clearInterval(id);
  }, [running, secondsLeft]);

  if (!step) return null;

  const format = (s) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          background: "var(--card-bg)"
        }}
      >
        <h2 className="page-title" style={{ fontSize: "1.4rem" }}>
          Cooking mode
        </h2>
        <p className="page-subtitle">
          Step {index + 1} of {steps.length}
        </p>
        <p style={{ marginBottom: "1rem" }}>{step.text}</p>

        {step.durationSeconds && (
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ marginBottom: "0.4rem" }}>
              Timer: <strong>{format(secondsLeft)}</strong>
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
                  setSecondsLeft(step.durationSeconds);
                  setRunning(false);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "0.5rem"
          }}
        >
          <button
            type="button"
            className="secondary-btn"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
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
              disabled={index === steps.length - 1}
              onClick={() =>
                setIndex((i) =>
                  i < steps.length - 1 ? i + 1 : i
                )
              }
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
