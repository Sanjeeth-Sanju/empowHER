import React, { useState } from "react";

export default function MenstrualTracker() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateCycle() {
    setError("");
    if (!lastPeriod) {
      setError("Please select your last period start date.");
      return;
    }

    const lastDate = new Date(lastPeriod);
    if (isNaN(lastDate.getTime())) {
      setError("Invalid date selected.");
      return;
    }

    const nextPeriod = new Date(lastDate);
    nextPeriod.setDate(lastDate.getDate() + Number(cycleLength));

    const ovulation = new Date(nextPeriod);
    ovulation.setDate(nextPeriod.getDate() - 14);

    const fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);

    setResult({
      nextPeriod: nextPeriod.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      ovulation: ovulation.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      fertileWindow: `${fertileStart.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })} – ${ovulation.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}`,
    });
  }

  return (
    <section className="tracker-section">
      <p className="tracker-description">
        Enter your most recent period start date and average cycle length to receive estimated predictions for your next period, ovulation, and fertile window.
      </p>

      <div className="tracker-form">
        <label htmlFor="lastPeriod">
          Last Period Start Date
          <input
            id="lastPeriod"
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
          />
        </label>

        <label htmlFor="cycleLength">
          Average Cycle Length (days)
          <input
            id="cycleLength"
            type="number"
            min="21"
            max="35"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
          />
        </label>

        <button onClick={calculateCycle}>Generate Predictions</button>

        {error && <p className="error-message">{error}</p>}
      </div>

      {result && (
        <div className="tracker-result">
          <h4>Predicted Dates</h4>
          <div className="result-grid">
            <div className="result-item">
              <span className="result-label">Next Period</span>
              <span className="result-value">{result.nextPeriod}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Ovulation Day</span>
              <span className="result-value">{result.ovulation}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Fertile Window</span>
              <span className="result-value">{result.fertileWindow}</span>
            </div>
          </div>
          <p className="disclaimer">
            These are estimates based on average cycle data. Individual cycles vary. Consult a healthcare professional for personalized advice.
          </p>
        </div>
      )}
    </section>
  );
}